import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vaiva',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Vaiva',
      });
    }, 2000);
  }

  render() {
    console.log('+++++++++++++++ParentComponenet+++++++++++++++++++++');
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
