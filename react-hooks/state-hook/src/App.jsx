import React, { Component } from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        <HookCounterFour />
      </div>
    );
  }
}

export default App;
