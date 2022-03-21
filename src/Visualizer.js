import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MergeSort from "./algos";
const Visualizer = (props) => {
  const [array, setArray] = useState(null);
  // useEffect(() => {
  //   newArray();
  // }, []);

  function newArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * 300));
    }
    setArray(array);
    console.log(array);
  }
  function mergedArray() {
    let newarr = MergeSort(array);
    setArray(newarr);
    console.log(array);
  }

  return (
    <>
      <Navbar arr={array} newArray={newArray} mergedArr={mergedArray} />
      <div className="bar-container">
        {array &&
          array.map((value, index) => (
            <div
              className="bar"
              key={index}
              style={{ height: `${value}px` }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Visualizer;
