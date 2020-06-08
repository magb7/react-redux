import React, { Component } from "react";
import { connect } from "react-redux";

class CounterComponent extends Component {
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: "ADD-1" })}>+ 1</button>
        <button onClick={() => dispatch({ type: "REMOVE-1" })}>- 1</button>
        <button onClick={() => dispatch({ type: "ADD-10" })}>+ 10</button>
        <button onClick={() => dispatch({ type: "REMOVE-10" })}>- 10</button>
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state,
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);
export default CounterContainer;
