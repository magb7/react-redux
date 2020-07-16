import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { backend } from "../conf";
import { toast } from "react-toastify";

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

const SignUp = () => {
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    const tmp = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backend}/auth/signup`, newUser)
      .then(() => {
        toast.success("Successfully Sign Up", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Problem while signing up", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
        <input type="submit" value="Submit" />
      </form>
      <Link to="/">
        <p>Sign In</p>
      </Link>
    </StyledWrapper>
  );
};

export default SignUp;
