import React, { Component } from 'react';

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vaiva',
    };
    console.log('lifcycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleB getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('lifecycleB componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('lifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('lifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('lifecycleB componentDidUpate');
  }

  render() {
    console.log('lifecycleB render');
    return <div>LifecycleB</div>;
  }
}
