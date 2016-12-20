// Implement a swap function for arrays. What are the inputs your function should take? What are the outputs?

// Implement a reverse function for arrays using your swap function.

// Write pseudo-code to solve this, then write javascript.

/*
function swap arrays (array, position to swap, position to swap with) {
  set a variable value1 equal to the item in position 1
  set position 1 equal to the item in position 2
  set position 2 equal to value1, the variable we originally set
}
*/

"use strict;"

var myArr = [3, 23, 5, 7, 1, 0, 34, 1];

function swapElements (array, position1, position2) {
  console.log(array, "UNSWAPPED");

  var val1 = array[position1];
  array[position1] = array[position2];
  array[position2] = val1;

  console.log(array, "SWAPPED");

  return array;
}

swapElements(myArr, 1, 6);
