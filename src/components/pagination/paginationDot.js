import React, { Component, PropTypes } from 'react';

const styles = {
  root: {
    display: 'inline-block',
    height: 18,
    width: 18,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    margin: 10,
    marginBottom: 15
  },
  dot: {
    backgroundColor: '#4d98ff',
    opacity: 0.2,
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  dot_white: {
    backgroundColor: '#ffffff',
    opacity: 0.2,
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  active: {
    backgroundColor: '#4d98ff',
    opacity: 1,
  },
  active_white: {
    backgroundColor: '#ffffff',
    opacity: 1,
  },
};

export default class PaginationDot extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    slide_idx: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = (event) => {
    this.props.onClick(event, this.props.index);
  };

  render() {
    const {
      active,
      slide_idx
    } = this.props;

    let styleDot;

    if (active) {
      if(slide_idx == 0){
        styleDot = Object.assign({}, styles.dot, styles.active);
      }else{
        styleDot = Object.assign({}, styles.dot, styles.active_white);
      }
    } else {
      if(slide_idx == 0){
        styleDot = styles.dot;
      }else{
        styleDot = styles.dot_white;
      }
    }

    return (
      <div style={styles.root} onClick={this.handleClick}>
        <div style={styleDot} />
      </div>
    );
  }
}
