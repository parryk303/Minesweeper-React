/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Square from './Square.jsx'

const Grid = ({ width, bombAmount, check, isChecked }) => {
  const squares = []
  for (let i = 1; i <= width; i++) {
    squares.push(<Square id={i} key={i} />);
    // <div id={i} key={i} className={isChecked ? "checked" : "valid"} onClick={check} data="0"></div>);
  }
  const randomSquare = () => {
    return Math.floor(Math.random() * Math.floor(width))
  }
  for (let i = 1; i <= bombAmount; i++) {
    let result = randomSquare();
    let bomb = <div id={result} key={result + 'bomb'} className="bomb" onClick={check} ></div>;
    squares.splice(result, 1, bomb);
  }
  return (
    <div className="grid" >
      {squares}
    </div>
  )
}

export default Grid;
