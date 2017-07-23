import React, { Component } from 'react';
import './Ground.css';

class Ground extends Component {

  render() {
    return (
      <ground
      className="entity"
      style={{
        height: this.props.details.h,
        width: this.props.game.w,
        top: this.props.game.h - this.props.details.h
      }}
      ></ground>
    )
  }
}


export default Ground;



