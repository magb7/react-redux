import React from "react";
import styled from "styled-components";

const ToDo = ({ todo }) => {
  return (
    <StyledList completed={todo.logcompleted}>
      <li
        onClick={() => {
          console.log(`toggle task ${todo.id}`);
        }}
      >
        {todo.content}
      </li>
      <button
        onClick={() => {
          console.log(`delete task ${todo.id}`);
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
