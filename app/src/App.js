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
      isChecked: false,
      isGameOver: false
    }
    this.check = this.check.bind(this);
  }

  check(e) {
    console.log(e.target.class);
    this.setState({
      isChecked: !this.isChecked
    })
    if (e.target.class === 'bomb') {
      this.setState({
        isGameOver: true
      })
    }

  //   let currentId = e.target.id.value
  //   if (isGameOver) return
  //   if (square.classList.contains('checked') || square.classList.contains('flag')) return
  //   if (square.classList.contains('bomb')) {
  //     gameOver(square)
  //   } else {
  //     let total = square.getAttribute('data')
  //     if (total !=0) {
  //       square.classList.add('checked')
  //       if (total == 1) square.classList.add('one')
  //       if (total == 2) square.classList.add('two')
  //       if (total == 3) square.classList.add('three')
  //       if (total == 4) square.classList.add('four')
  //       square.innerHTML = total
  //       return
  //     }
  //     checkSquare(square, currentId)
  //   }
  //   square.classList.add('checked')
  // }
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
