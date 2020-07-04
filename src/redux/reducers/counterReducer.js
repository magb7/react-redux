const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD-1":
      return state + 1;
    case "REMOVE-1":
      return state - 1;
    case "ADD-10":
      return state + 10;
    case "REMOVE-10":
      return state - 10;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
