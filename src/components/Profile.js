import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson",
  });

  return (
    <div>
      <h2>Profile Page</h2>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.lastname}</p>
      <Link to="/signin">
        <button>Log out</button>
      </Link>
    </div>
  );
};

export default Profile;
