import { Button } from "@mui/material";
import React, { useState } from "react";
const Practice = () => {
  const [data, setdata] = useState([
    {
      product1: {
        Name: "",
        Quantity: 0,
        Price: "",
      },
      product2: {
        Name: "",
        Quantity: 0,
        Price: "",
      },
    },
  ]);

  const addData = (array, value) => {
    const key = "product" + (Object.keys(array[0]).length + 1);
    const obj = array[0];
    obj[key] = value;

    setdata(obj);
  };

  const deleteData = (array, key) => {
    const obj = array[0];
    delete obj[key];

    setdata(obj);
  };

  return (
    <>
      <Button variant="outline" color="skyblue">
        Add
      </Button>
      <Button variant="outline" color="tomato">
        Delete
      </Button>
      {data.map((i) => {
        return (
          <>
            <h3>{data}</h3>
          </>
        );
      })}
    </>
  );
};

export default Practice;
