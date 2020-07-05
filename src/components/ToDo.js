import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions/todoActions";

const ToDo = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <StyledList completed={todo.completed}>
      <p
        onClick={() => {
          console.log(`toggle task ${index}`);
          dispatch(toggleTodo(index));
        }}
      >
        {todo.content}
      </p>
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

const StyledList = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  width: 100%;
  border: 1px solid red;
  margin-bottom: 10px;
  list-style: none;

  p {
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
