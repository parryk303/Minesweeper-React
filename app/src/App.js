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
      squares: [],
      isChecked: false
    }
    this.check = this.check.bind(this);
  }

  check() {
    this.setState({
      isChecked: !this.isChecked
    })
  }

  render() {
    return (
      <div className="container" >
        <header id="Title">
          💣  Minesweeper 😎
        </header>
        <div className="container">
          <Grid
          width={this.state.width}
          bombAmount={this.state.bombAmount}
          check={this.check}
          isChecked={this.state.isChecked}
           />
          <div> Flags left: <span id="flags-left">20</span></div>
          <div id="result"></div>
        </div>
      </div>
    );
  }
}

export default App;
