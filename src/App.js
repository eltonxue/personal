import React, { Component } from 'react';

import Home from './containers/Home';
import Navbar from './containers/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
