import React, { Component } from 'react';
import Game from '../Game/Game';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      keyMap: {}
    }
  }


  componentDidMount() {
    document.addEventListener("keydown", this.handleKey.bind(this, true), false);
    document.addEventListener("keyup", this.handleKey.bind(this, false), false);
  }

  handleKey(isDown, e) {
    let keyMap = {};
    for (let key in this.state.keyMap) {
      if (this.state.keyMap[key]) {
        keyMap[key] = true;
      }
    }
    if (isDown) {
      keyMap[e.key] = true;
    } else {
      delete keyMap[e.key];
    }
    this.setState({ keyMap });
  }

  render() {
    return (
      <div className="App">

        <Game keyMap={this.state.keyMap} />

      </div>
    );
  }
}

export default App;
