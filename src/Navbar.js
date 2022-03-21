import React from "react";
import Visualizer from "./Visualizer";
import MergeSort from "./algos";
const Navbar = (props) => {
  const { arr, newArray, mergedArr } = props;

  return (
    <>
      <div className="navbar">
        <header>Sort Visualizer</header>
        <button onClick={newArray}>New Array</button>
        <button onClick={mergedArr}>Merge Sort</button>
      </div>
    </>
  );
};

export default Navbar;
