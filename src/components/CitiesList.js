import React, { useState, useEffect } from "react";
import axios from "axios";

const CitiesList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cities").then(({ data }) => {
      setCities(data);
    });
  }, []);

  console.log(cities);

  return (
    <div>
      <ul>
        {cities.map((city, i) => {
          return <li key={i}>{city.name}</li>;
        })}
      </ul>
      <hr />
      <br />
    </div>
  );
};
export default CitiesList;
