import React, { Component } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PostList /> */}
        <PostForm />
      </div>
    );
  }
}

export default App;
