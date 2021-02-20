/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

const Grid = ({ width, bombAmount }) => {
  const squares = []
  for (let i = 1; i <= width; i++) {
    squares.push(<div id={i} key={i} className="valid" data="0"></div>);
  }
  const randomSquare = () => {
    return Math.floor(Math.random() * Math.floor(width))
  }
  for (let i = 1; i <= bombAmount; i++) {
    let result = randomSquare();
    let bomb = <div id={result} key={result} className="💣" ></div>;
    squares.splice(result, 0, bomb);
  }
  return (
    <div className="grid" >
      {squares}
    </div>
  )
}

export default Grid;