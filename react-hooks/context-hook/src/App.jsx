import React, { Component } from 'react';
import ComponentC from './components/ComponentC.jsx';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserContext.Provider value={'Vaiva'}>
          <ChannelContext.Provider value={'codevolutions'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
