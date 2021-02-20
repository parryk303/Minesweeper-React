import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid.jsx'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      bombAmount: 20,
      squares: []
    }
  }

  render() {
    return (
      <div className="container" >
        <header id="Title">
          💣  Minesweeper 😎
        </header>
        <div className="container">
          <Grid width={this.state.width} bombAmount={this.state.bombAmount} />
          <div> Flags left: <span id="flags-left">20</span></div>
          <div id="result"></div>
        </div>
      </div>
    );
  }
}

export default App;
