const initState = {
  todos: [
    {
      id: 1,
      content: "To do #1",
      completed: false,
    },
    {
      id: 2,
      content: "To do  #2",
      completed: true,
    },
  ],
};

const todoReducer = (state = initState, action) => {
  return state;
};

export default todoReducer;
