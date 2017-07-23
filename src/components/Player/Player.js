import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  render() {
    return (
      <player
        className="entity"
        style={{
          top: this.props.details.y,
          left: this.props.details.x,
          width: this.props.details.w,
          height: this.props.details.h
        }}
        >

      </player>
    )
  }
}


export default Player;



