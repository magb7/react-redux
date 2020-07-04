import React from "react";
import { useSelector } from "react-redux";

const Blog = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <h2>Blog page</h2>
      <hr />
      {posts.length ? (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <p>No article</p>
      )}
    </div>
  );
};

export default Blog;
