import React, { Component } from 'react';
import Player from '../Player/Player';
import Background from '../Background/Background';
import Ground from '../Ground/Ground';


import './Game.css';

const GAME_HEIGHT = 1000;
const GAME_WIDTH = 3000;

class Game extends Component {
    constructor() {
    super();

    const ground = {
      h: 100
    }

    this.state = {
      game: {
        x: 0,
        y: 0,
        h: GAME_HEIGHT,
        w: GAME_WIDTH
      },
      player: {
        h: 60,
        w: 30,
        x: 500,
        y: GAME_HEIGHT - ground.h - 60
      },
      ground
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
      ...this.state.player,
      x: this.state.player.x + xDelta,
    };
    const h = window.innerHeight;
    const w = window.innerWidth;
    //create new game state
    const game = {
      //since we cant move the game,
      //we move the game into it.
      ...this.state.game,
      x: w/2 - player.x,
      y: h - this.state.ground.h - player.y,
    };


    this.setState({
      ...this.state,
      game,
      player
    });
  }



  render() {
    return (
      <game
        className="entity"
        style={{
          top: this.state.game.y,
          left: this.state.game.x,
          height: this.state.game.h,
          width: this.state.game.w
        }}
      >
        <Background game={this.state.game} />
        <Ground game={this.state.game} details={this.state.ground} />
        <Player
          details={this.state.player}
          game={this.state.game}
         />
      </game>
    )
  }
}


export default Game;
