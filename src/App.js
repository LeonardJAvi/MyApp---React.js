import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

console.log(todos);

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">Tasks</a>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
