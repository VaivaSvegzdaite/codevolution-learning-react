import React, { Component } from 'react';
import ParentComponent from './components/ParentComponent';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
      </div>
    );
  }
}

export default App;
