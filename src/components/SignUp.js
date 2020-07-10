import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { backend } from "../conf";

const SignUp = () => {
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    const tmp = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    axios
      .post(`${backend}/auth/signup`, newUser)
      .then()
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <StyledWrapper>
      <h2>Sign Up Form</h2>
      <br />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Name :
          <input
            type="text"
            name="name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          Lastname :
          <input
            type="text"
            name="lastname"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <br />
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
        <label>
          Password Bis :
          <input type="password" name="passwordbis" required />
        </label>
        <br />
        <Link
          to="/"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          <input type="submit" value="Submit" />
        </Link>
      </form>
      <Link to="/signin">
        <p>Sign In</p>
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
