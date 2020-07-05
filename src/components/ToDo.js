import React from "react";
import styled from "styled-components";

const ToDo = ({ completed, todo }) => {
  return <StyledList completed={completed}>{todo}</StyledList>;
};

const StyledList = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  width: 100%;
  border: 1px solid red;
  margin-bottom: 10px;
  list-style: none;
  text-decoration-line: ${(props) =>
    props.completed ? "line-through" : "none"};
`;

export default ToDo;
