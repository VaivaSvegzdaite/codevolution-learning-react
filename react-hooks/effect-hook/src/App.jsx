import React, { Component } from 'react';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import DataFetching from './components/DataFetching';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        <DataFetching />
      </div>
    );
  }
}

export default App;
