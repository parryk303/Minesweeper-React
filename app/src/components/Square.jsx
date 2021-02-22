import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }
  render() {
    return (
      <div className={ this.state.condition ? "checked" : "valid" } toggleClassName={ this.handleClick } data="0"></div>
    )
  }
}

export default Square;
