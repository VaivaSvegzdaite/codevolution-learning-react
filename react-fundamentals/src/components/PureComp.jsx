import React, { PureComponent } from 'react';

export class PureComp extends PureComponent {
  render() {
    console.log('+++++++++++++++PureComponenet+++++++++++++++++++++');
    return <div>Pure component {this.props.name}</div>;
  }
}

export default PureComp;
