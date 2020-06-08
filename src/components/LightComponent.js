import React, { Component } from "react";

class LightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: "on",
    };
    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    const { light } = this.state;
    this.setState({
      light: light === "on" ? "off" : "on",
    });
  }

  render() {
    const { light } = this.state;
    return (
      <div>
        <p>{light}</p>
        <button onClick={this.onSwitch}>switch</button>
      </div>
    );
  }
}

export default LightComponent;
