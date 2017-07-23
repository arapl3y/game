import React, { Component } from 'react';
import Player from '../Player/Player';
import Background from '../Background/Background';
import Ground from '../Ground/Ground';


import './Game.css';


class Game extends Component {
    constructor() {
    super();

    this.state = {
      player: {
        x: 135,
        y: 30
      }
    }

    this.loop = this.loop.bind(this);
  }

  componentDidMount() {
    setInterval(this.loop, 16);
  }

  loop() {
    let xDelta = 0;
    if (this.props.keyMap.ArrowRight) {
      xDelta = 1;
    } else if (this.props.keyMap.ArrowLeft) {
      xDelta = -1;
    }
    this.setState({
      player: {
        x: this.state.player.x + xDelta,
        y: this.state.player.y
      }
    });
  }



  render() {
    return (
      <div>
        <Background />
        <Ground />
        <Player pos={this.state.player} />
      </div>
    )
  }
}


export default Game;
