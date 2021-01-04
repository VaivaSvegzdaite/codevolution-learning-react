import React, { Component } from 'react';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import UserForm from './components/UserForm';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        {/* <CounterOne />
        <CounterTwo /> */}
        <UserForm />
      </div>
    );
  }
}

export default App;
