import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SignUp from "./forms/SignUp";
import SignIn from "./forms/SignIn";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login test</h1>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
          transition={Zoom}
        />
      </div>
    );
  }
}

export default App;
