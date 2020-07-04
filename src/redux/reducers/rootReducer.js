const initState = {
  posts: [
    {
      id: 1,
      title: "Title 1",
      body: "Content",
    },
    {
      id: 2,
      title: "Title 2",
      body: "Content",
    },
    {
      id: 3,
      title: "Title 3",
      body: "Content",
    },
    {
      id: 4,
      title: "Title 4",
      body: "Content",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
