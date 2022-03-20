import React from "react";
import Visualizer from "./Visualizer";
const Navbar = (props) => {
  const { arr, newArray } = props;

  return (
    <>
      <div className="navbar">
        <header>Sort Visualizer</header>
        <button onClick={newArray}>New Array</button>
        <button>Merge Sort</button>
      </div>
    </>
  );
};

export default Navbar;
