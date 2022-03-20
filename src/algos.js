import React from "react";

const MergeSort = (arr) => {
  //getting middle index to split original array into halves
  const mid = Math.floor(arr.length / 2);
  const firstPart = arr.slice(0, mid);
  const secondPart = arr.slice(mid);
  console.log(firstPart, secondPart);
};

export default MergeSort;
