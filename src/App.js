import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Board from './components/Board/Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Board />
      </div>
    );
  }
}

export default App;
