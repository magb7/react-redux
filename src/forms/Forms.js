import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Forms = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Forms;
