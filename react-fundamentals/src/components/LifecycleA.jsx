import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

export default class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vaiva',
    };
    console.log('lifcycleA constructor');
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution',
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('lifecycleA componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('lifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('lifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('lifecycleA componentDidUpate');
  }

  render() {
    console.log('lifecycleA render');
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>State change</button>
        <LifecycleB />
      </div>
    );
  }
}
