import React from "react";
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let sortedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
  console.log(sortedArr);
}

function MergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const firstPart = MergeSort(arr.slice(0, mid));
  const secondPart = MergeSort(arr.slice(mid));
  return merge(firstPart, secondPart);
}

export default MergeSort;
