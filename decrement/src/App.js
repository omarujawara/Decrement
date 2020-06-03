import React, { Component } from "react";
import Decrement from "./decrement";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Decrement</h1>
        <Decrement start={3} />
      </React.Fragment>
    );
  }
}

export default App;
