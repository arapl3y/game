import React, { Component } from 'react';
import Player from '../Player/Player';
import Background from '../Background/Background';
import Ground from '../Ground/Ground';


import './Game.css';


class Game extends Component {
    constructor() {
    super();

    this.state = {
      viewport: {
        x: 0,
        y: 0
      },
      player: {
        x: 135,
        y: 510
      }
    }

    this.loop = this.loop.bind(this);
  }

  componentWillMount() {
    setInterval(this.loop, 16);
    this.loop();
  }

  loop() {

    //move player x-many pixels, based on key pressed
    let xDelta = 0;
    if (this.props.keyMap.ArrowRight) {
      xDelta = 3;
    } else if (this.props.keyMap.ArrowLeft) {
      xDelta = -3;
    }
    //create new player state
    const player = {
      x: this.state.player.x + xDelta,
      y: this.state.player.y
    };
    //create new viewport state
    const viewport = {
      //since we cant move the viewport,
      //we move the game into it.
      x: window.innerWidth/2 - player.x,
      y: window.innerHeight/2 - player.y
    };

    this.setState({
      viewport,
      player
    });
  }



  render() {
    return (
      <game className="entity" style={{ top: this.state.viewport.y, left: this.state.viewport.x }}>
        <Background />
        <Ground />
        <Player pos={this.state.player} />
      </game>
    )
  }
}


export default Game;
