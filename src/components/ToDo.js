import React from "react";
import styled from "styled-components";

const ToDo = ({ completed, todo, id }) => {
  return (
    <StyledList completed={completed}>
      <li
        onClick={() => {
          console.log(`toggle task ${id}`);
        }}
      >
        {todo}
      </li>
      <button
        onClick={() => {
          console.log(`delete task ${id}`);
        }}
      >
        Delete
      </button>
    </StyledList>
  );
};

const StyledList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  width: 100%;
  border: 1px solid red;
  margin-bottom: 10px;

  li {
    list-style: none;
    text-decoration-line: ${(props) =>
      props.completed ? "line-through" : "none"};
  }

  button {
    border-color: coral;
    background-color: lightcoral;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    font-weight: bold;
  }
`;

export default ToDo;
