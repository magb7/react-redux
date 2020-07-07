import React, { Component } from "react";
import "./App.css";
import CitiesList from "./components/CitiesList";
import CitiesForm from "./components/CitiesForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitiesList />
        <CitiesForm />
      </div>
    );
  }
}

export default App;
