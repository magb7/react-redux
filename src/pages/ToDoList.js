import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//Components
import ToDo from "../components/ToDo";

const ToDoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <>
      <Header>
        <h2>To Do</h2>
      </Header>
      <ListWrapper>
        {todos.length ? (
          todos.map((todo) => {
            return (
              <ToDo
                completed={todo.completed}
                todo={todo.content}
                key={todo.id}
              />
            );
          })
        ) : (
          <p>No To Do !</p>
        )}
      </ListWrapper>
    </>
  );
};

const Header = styled.header`
  height: 15vh;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 45px;
    font-family: cursive;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 20px auto;
  border: 1px solid black;
  width: 50vw;
  padding: 10px;
`;

export default ToDoList;
