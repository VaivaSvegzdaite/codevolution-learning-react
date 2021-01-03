import React, { Component } from 'react';

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome visitor',
    };
  }

  handleMessage = () => {
    this.setState({ message: 'Thank you for suscrbing' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleMessage()}>Suscribe</button>
      </div>
    );
  }
}
