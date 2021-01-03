import React, { Component } from 'react';

export default class ClassClick extends Component {
  clickHandler() {}

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}
