import React, { useState } from "react";
import axios from "axios";

const CitiesForm = () => {
  const [newCity, setNewCity] = useState({});

  const handleChange = (e) => {
    const tmp = { ...newCity, [e.target.name]: e.target.value };
    setNewCity(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/cities", newCity)
      .then()
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div>
      <h2>New City</h2>
      <br />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          City :
          <input
            type="text"
            name="name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label>
          Department :
          <input
            type="text"
            name="department"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label>
          Description :
          <input
            type="text"
            name="description"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <input type="submit" value="New city" />
      </form>
    </div>
  );
};
export default CitiesForm;
