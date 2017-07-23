import React, { Component } from 'react';
import './Player.css';

class Player extends Component {


  render() {
    return (
      <player className="entity" style={{ top: this.props.pos.y, left: this.props.pos.x }}>

      </player>
    )
  }
}


export default Player;



