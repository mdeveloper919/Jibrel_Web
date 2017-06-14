const React = require('react')
const PropTypes = require('prop-types')
const { findDOMNode } = require('react-dom')
const scrollIntoView = require('dom-scroll-into-view')

const IMPERATIVE_API = [
  'blur',
  'checkValidity',
  'click',
  'focus',
  'select',
  'setCustomValidity',
  'setSelectionRange',
  'setRangeText',
]

class Autocomplete extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    shouldItemRender: PropTypes.func,
    sortItems: PropTypes.func,
    getItemValue: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    renderMenu: PropTypes.func,
    menuStyle: PropTypes.object,
    inputProps: PropTypes.object,
    wrapperProps: PropTypes.object,
    wrapperStyle: PropTypes.object,
    autoHighlight: PropTypes.bool,
    onMenuVisibilityChange: PropTypes.func,
    open: PropTypes.bool,
    debug: PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    wrapperProps: {},
    wrapperStyle: {
      display: 'inline-block',
    },
    inputProps: {},
    onChange() {},
    onSelect() {},
    renderMenu(items, value, style) {
      return <div style={{ ...style, ...this.menuStyle }} children={items}/>
    },
    menuStyle: {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '30%',
    },
    autoHighlight: true,
    onMenuVisibilityChange() {},
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      highlightedIndex: null,
    }
    this._debugStates = []
    this.exposeAPI = this.exposeAPI.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleInputClick = this.handleInputClick.bind(this)
  }

  componentWillMount() {
    this.refs = {}
    this._ignoreBlur = false
    this._performAutoCompleteOnUpdate = false
    this._performAutoCompleteOnKeyUp = false
  }

  componentWillReceiveProps(nextProps) {
    this._performAutoCompleteOnUpdate = true
    if (this.props.items !== nextProps.items ||
      this.state.highlightedIndex >= nextProps.items.length) {
      this.setState({ highlightedIndex: null })
    }
  }

  componentDidMount() {
    if (this.isOpen()) {
      this.setMenuPositions()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.isOpen && !prevState.isOpen) || ('open' in this.props && this.props.open && !prevProps.open))
      this.setMenuPositions()

    if (this.isOpen() && this._performAutoCompleteOnUpdate) {
      this._performAutoCompleteOnUpdate = false
      this.maybeAutoCompleteText()
    }

    this.maybeScrollItemIntoView()
    if (prevState.isOpen !== this.state.isOpen) {
      this.props.onMenuVisibilityChange(this.state.isOpen)
    }
    if (this._ignoreBlur) {
      this.refs.input.focus()
    }
  }

  exposeAPI(el) {
    this.refs.input = el
    IMPERATIVE_API.forEach(ev => this[ev] = (el && el[ev] && el[ev].bind(el)))
  }

  maybeScrollItemIntoView() {
    if (this.isOpen() && this.state.highlightedIndex !== null) {
      const itemNode = this.refs[`item-${this.state.highlightedIndex}`]
      const menuNode = this.refs.menu
      if(itemNode) {
        scrollIntoView(
          findDOMNode(itemNode),
          findDOMNode(menuNode),
          { onlyScrollIfNeeded: true }
        )
      }
    }
  }

  handleKeyDown(event) {
    if (Autocomplete.keyDownHandlers[event.key])
      Autocomplete.keyDownHandlers[event.key].call(this, event)
    else if (!this.isOpen()) {
      this.setState({
        isOpen: true
      })
    }
  }

  handleChange(event) {
    this._performAutoCompleteOnKeyUp = true
    this.setState({ highlightedIndex: null })
    this.props.onChange(event, event.target.value)
  }

  handleKeyUp() {
    if (this._performAutoCompleteOnKeyUp) {
      this._performAutoCompleteOnKeyUp = false
      this.maybeAutoCompleteText()
    }
  }

  static keyDownHandlers = {
    ArrowDown(event) {
      event.preventDefault()
      const itemsLength = this.getFilteredItems().length
      if (!itemsLength) return
      const { highlightedIndex } = this.state
      const index = (
        highlightedIndex === null ||
        highlightedIndex === itemsLength - 1
      ) ?  0 : highlightedIndex + 1
      this._performAutoCompleteOnKeyUp = true
      this.setState({
        highlightedIndex: index,
        isOpen: true,
      })
    },

    ArrowUp(event) {
      event.preventDefault()
      const itemsLength = this.getFilteredItems().length
      if (!itemsLength) return
      const { highlightedIndex } = this.state
      const index = (
        highlightedIndex === 0 ||
        highlightedIndex === null
      ) ? itemsLength - 1 : highlightedIndex - 1
      this._performAutoCompleteOnKeyUp = true
      this.setState({
        highlightedIndex: index,
        isOpen: true,
      })
    },

    Enter(event) {
      if (!this.isOpen()) {
        return
      }
      else if (this.state.highlightedIndex == null) {
        this.setState({
          isOpen: false
        }, () => {
          this.refs.input.select()
        })
      }
      else {
        event.preventDefault()
        const item = this.getFilteredItems()[this.state.highlightedIndex]
        const value = this.props.getItemValue(item)
        this.setState({
          isOpen: false,
          highlightedIndex: null
        }, () => {
          this.refs.input.setSelectionRange(
            value.length,
            value.length
          )
          this.props.onSelect(value, item)
        })
      }
    },

    Escape() {
      this.setIgnoreBlur(false)
      this.setState({
        highlightedIndex: null,
        isOpen: false
      })
    },

    Tab() {
      this.setIgnoreBlur(false)
    },
  }

  getFilteredItems() {
    let items = this.props.items

    if (this.props.shouldItemRender) {
      items = items.filter((item) => (
        this.props.shouldItemRender(item, this.props.value)
      ))
    }

    if (this.props.sortItems) {
      items.sort((a, b) => (
        this.props.sortItems(a, b, this.props.value)
      ))
    }

    return items
  }

  maybeAutoCompleteText() {
    if (!this.props.autoHighlight || this.props.value === '')
      return
    const { highlightedIndex } = this.state
    const items = this.getFilteredItems()
    if (items.length === 0)
      return
    const matchedItem = highlightedIndex !== null ?
      items[highlightedIndex] : items[0]
    const itemValue = this.props.getItemValue(matchedItem)
    const itemValueDoesMatch = (itemValue.toLowerCase().indexOf(
      this.props.value.toLowerCase()
    ) === 0)
    if (itemValueDoesMatch && highlightedIndex === null)
      this.setState({ highlightedIndex: 0 })
  }

  setMenuPositions() {
    const node = this.refs.input
    const rect = node.getBoundingClientRect()
    const computedStyle = global.window.getComputedStyle(node)
    const marginBottom = parseInt(computedStyle.marginBottom, 10) || 0
    const marginLeft = parseInt(computedStyle.marginLeft, 10) || 0
    const marginRight = parseInt(computedStyle.marginRight, 10) || 0
    this.setState({
      menuTop: rect.bottom + marginBottom,
      menuLeft: rect.left + marginLeft,
      menuWidth: rect.width + marginLeft + marginRight
    })
  }

  highlightItemFromMouse(index) {
    this.setState({ highlightedIndex: index })
  }

  selectItemFromMouse(item) {
    const value = this.props.getItemValue(item)
    this.setState({
      isOpen: false,
      highlightedIndex: null
    }, () => {
      this.setIgnoreBlur(false)
      this.props.onSelect(value, item)
    })
  }

  setIgnoreBlur(ignore) {
    this._ignoreBlur = ignore
  }

  renderMenu() {
    const items = this.getFilteredItems().map((item, index) => {
      const element = this.props.renderItem(
        item,
        this.state.highlightedIndex === index,
        { cursor: 'default' }
      )
      return React.cloneElement(element, {
        onMouseEnter: () => this.highlightItemFromMouse(index),
        onClick: () => this.selectItemFromMouse(item),
        ref: e => this.refs[`item-${index}`] = e,
      })
    })
    const style = {
      left: this.state.menuLeft,
      top: this.state.menuTop,
      minWidth: 0,
    }
    const menu = this.props.renderMenu(items, this.props.value, style)
    return React.cloneElement(menu, {
      ref: e => this.refs.menu = e,
      onMouseEnter: () => this.setIgnoreBlur(true),
      onMouseLeave: () => this.setIgnoreBlur(false),
    })
  }

  handleInputBlur(event) {
    if (this._ignoreBlur) {
      return
    }
    this.setState({
      isOpen: false,
      highlightedIndex: null
    })
    const { onBlur } = this.props.inputProps
    if (onBlur) {
      onBlur(event)
    }
  }

  handleInputFocus(event) {
    if (this._ignoreBlur) {
      return
    }
    this.setState({ isOpen: true })
    const { onFocus } = this.props.inputProps
    if (onFocus) {
      onFocus(event)
    }
  }

  isInputFocused() {
    const el = this.refs.input
    return el.ownerDocument && (el === el.ownerDocument.activeElement)
  }

  handleInputClick() {
    if (this.isInputFocused() && !this.isOpen())
      this.setState({ isOpen: true })
  }

  composeEventHandlers(internal, external) {
    return external
      ? e => { internal(e); external(e) }
      : internal
  }

  isOpen() {
    return 'open' in this.props ? this.props.open : this.state.isOpen
  }

  render() {
    if (this.props.debug) {
      this._debugStates.push({
        id: this._debugStates.length,
        state: this.state
      })
    }

    const { inputProps } = this.props
    const open = this.isOpen()
    return (
      <div style={{ ...this.props.wrapperStyle }} {...this.props.wrapperProps}>
        <input
          {...inputProps}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          autoComplete="off"
          ref={this.exposeAPI}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={this.handleChange}
          onKeyDown={this.composeEventHandlers(this.handleKeyDown, inputProps.onKeyDown)}
          onKeyUp={this.composeEventHandlers(this.handleKeyUp, inputProps.onKeyUp)}
          onClick={this.composeEventHandlers(this.handleInputClick, inputProps.onClick)}
          value={this.props.value}
          placeholder="your@email.com"
        />
        {open && this.renderMenu()}
        {this.props.debug && (
          <pre style={{ marginLeft: 300 }}>
            {JSON.stringify(this._debugStates.slice(Math.max(0, this._debugStates.length - 5), this._debugStates.length), null, 2)}
          </pre>
        )}
      </div>
    )
  }
}

module.exports = Autocomplete
