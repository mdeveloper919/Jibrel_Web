import React, { Component, PropTypes } from 'react';

import PaginationDot from './paginationDot';

const styles = {
  root: {

  },
};

export default class Pagination extends Component {
  static propTypes = {
    dots: PropTypes.number.isRequired,
    slide_idx: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    onChangeIndex: PropTypes.func.isRequired,
  };

  constructor(props) {
      super(props);
      this.state = {
          windowWidth: window.innerWidth,
          mobileNavVisible: false,
      };
      console.log(window.innerWidth)
  };

  handleResize(){
      this.setState({
          windowWidth: window.innerWidth,
      });
  }

  componentWillMount(){
      this.handleResize();
  }

  componentDidMount() {
      window.addEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
      window.addEventListener('resize', this.handleResize=()=>{
        if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
          this.setState({mobileNavVisible: true})
        }else{
          this.setState({mobileNavVisible: false})
        }
      });
  }

  componentWillUnmount(){
      window.removeEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
      window.removeEventListener('resize', this.handleResize=()=>{
        if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
          this.setState({mobileNavVisible: true})
        }else{
          this.setState({mobileNavVisible: false})
        }
      });
  }

  handleClick = (event, index) => {
    this.props.onChangeIndex(index);
  };

  render() {
    const {
      index,
      dots,
      slide_idx
    } = this.props;

    const children = [];

    for (let i = 0; i < dots; i += 1) {
      children.push(
        <PaginationDot
          key={i}
          index={i}
          slide_idx={slide_idx}
          active={i === index}
          onClick={this.handleClick}
        />,
      );
    }

    return (
      <div style={slide_idx == 1 ? {position: 'absolute', top: this.state.windowWidth <= 700 ? 540 : 645, left: this.state.windowWidth/2-60, display: 'flex', flexDirection: 'row', height: 50} : null}>
        {children}
      </div>
    );
  }
}
