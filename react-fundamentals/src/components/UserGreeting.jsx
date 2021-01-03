import React, { Component } from 'react';

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Vaiva</div>;

    // return this.state.isLoggedIn ? (
    //   <div>WelcomeVaiva</div>
    // ) : (
    //   <div>Welcome guest</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vaiva</div>;
    // } else {
    //   return <div>Welcome guest</div>;
    // }
    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vaiva</div>;
    // } else {
    //   return <div>Welcome guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Vaiva</div>
    //     <div>Welcome guest</div>
    //   </div>
    // );
  }
}
