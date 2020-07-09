import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

export default App;
