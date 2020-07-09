import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const SignUp = () => {
  const [newConnection, setNewConnection] = useState({});

  const handleChange = (e) => {
    const tmp = { ...newConnection, [e.target.name]: e.target.value };
    setNewConnection(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newConnection);
    axios
      .post(`http://localhost:5000/auth/signin`, newConnection)
      .then()
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <StyledWrapper>
      <h2>Sign In Form</h2>
      <br />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Email :
          <input
            type="email"
            name="email"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          Password :
          <input
            type="password"
            name="password"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <Link to="/profile">
          <input type="submit" value="Submit" />
        </Link>
      </form>
      <Link to="/signup">
        <p>Sign Up</p>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  border: 1px solid purple;
  margin: 30px;
  display: flex;
  flex-flow: column wrap;
  width: 50vw;

  input {
    margin: 10px;
  }
`;

export default SignUp;
