import React, { Component } from 'react';
import ClassTimer from './components/ClassTimer';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FocusInput /> */}
        <ClassTimer />
        <HookTimer />
      </div>
    );
  }
}

export default App;
