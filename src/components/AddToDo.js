import React from "react";
import styled from "styled-components";

const AddToDo = () => {
  return (
    <StyledAdd>
      <input type="text" placeholder="Type To Do" />
      <button
        onClick={() => {
          console.log("add to do");
        }}
      >
        ADD
      </button>
    </StyledAdd>
  );
};

const StyledAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid yellowgreen;
  width: 100%;
  margin-bottom: 20px;

  button {
    border-color: cyan;
    background-color: lightcyan;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    font-weight: bold;
  }

  input {
    outline-color: cyan;
    width: 50%;
    padding: 5px;
  }
`;

export default AddToDo;
