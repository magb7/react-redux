import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
      .post(`http://localhost:5000/auth/signup`, newUser)
      .then()
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <StyledWrapper>
      <h3>{newUser.email}</h3>
      <h3>{newUser.password}</h3>
      <h3>{newUser.name}</h3>
      <h3>{newUser.lastname}</h3>
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
        <input type="submit" value="Submit" />
      </form>
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
