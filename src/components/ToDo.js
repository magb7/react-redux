import React from "react";
import styled from "styled-components";

const ToDo = ({ completed, todo }) => {
  return (
    <Container completed={completed}>
      <p>{todo}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  width: 100%;
  border: 1px solid red;
  margin-bottom: 10px;

  p {
    text-decoration-line: ${(props) =>
      props.completed ? "line-through" : "none"};
  }
`;

export default ToDo;
