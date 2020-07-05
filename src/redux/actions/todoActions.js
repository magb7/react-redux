let nextTodoId = 0;

export const addTodo = (content) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
};

export const toggleTodo = (index) => {
  return {
    type: "TOGGLE_TODO",
    payload: { index },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: { id },
  };
};
