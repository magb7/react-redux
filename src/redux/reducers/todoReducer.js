const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, content } = action.payload;
      return [...state, { id, content, completed: false }];
    }
    case "TOGGLE_TODO": {
      const { index } = action.payload;
      const toggleTodo = [...state];
      toggleTodo[index].completed
        ? (toggleTodo[index].completed = false)
        : (toggleTodo[index].completed = true);
      console.log(toggleTodo);
      return [...toggleTodo];
    }

    case "DELETE_TODO":
      // take the id of the todo and remove it from the state
      break;
    default:
      break;
  }
  return state;
};

export default todoReducer;
