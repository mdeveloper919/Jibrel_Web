import React from "react"
import PropTypes from "prop-types"
import jsonp from "jsonp"
import Images from './images'

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null
    }
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error"
      })
      return
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${this.input.value}`;
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { action, messages, className, style, styles } = this.props
    const { status } = this.state
    return (
      <div className="email_view" style={style}>
        <form action={action} method="post" target="_blank" novalidate>
          {status === null && <p style={styles.sending}>{messages.null}</p>}
          {status === "sending" && <p style={styles.sending}>{messages.sending}</p>}
          {status === "success" && <p style={styles.success}>{messages.success}</p>}
          {status === "error" && <p style={styles.error}>{messages.error}</p>}
          <div className="email-box">
            <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              placeholder={messages.inputPlaceholder}
            />
            <div className="right-box"
              disabled={this.state.status === "sending" || this.state.status === "success"}
              onClick={this.onSubmit}
              type="submit"
            >
              <img src={Images.email}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
}

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: "your@email.com",
    sending: "Sending in progress...",
    success: "Thanks for signing-up. We'll keep you posted!",
    error: "Oops, unable to save this address",
    null: "Sign-up for fundraiser updates"
  },
  styles: {
    sending: {
      fontSize: 24,
      fontWeight: 200,
      color: "auto"
    },
    success: {
      fontSize: 24,
      fontWeight: 200,
      color: "#2CB186"
    },
    error: {
      fontSize: 24,
      fontWeight: 200,
      color: "red"
    }
  }
}

export default SubscribeForm
