import React, { Component } from "react";
import "./App.css";
import CounterContainer from "./components/CounterContainer";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
