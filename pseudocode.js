// Implement a swap function for arrays. What are the inputs your function should take? What are the outputs?
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
    var arr2 = ["monkey", "bigfoot", "unicorn", "elf", "frog"]

    function swapElements (array, position1, position2) {
      console.log(array, "UNSWAPPED");

      var val1 = array[position1];
      array[position1] = array[position2];
      array[position2] = val1;

      console.log(array, "SWAPPED");

      return array;
    }

    swapElements(myArr, 1, 6);
    swapElements(arr2, 1, 3);


// Implement a reverse function for arrays using your swap function.

// Write pseudo-code to solve this, then write javascript.
 /*
 I don't know how to do this using a swap...
 Swap the last item with the first item, and then the second to last item with the second to first
 So 2 iterators?
*/
var arrNums = [1, 2, 3, 4];

function reverseArray (array) {
  var countDown = array.length-1;
  var countUp = 0;

  console.log(array, "UNREVERSED");

  while (countDown > countUp) {
    var holdVal = array[countUp];
    array[countUp] = array[countDown];
    array[countDown] = holdVal;
    countDown --;
    countUp ++;
  }

  console.log(array, "REVERSED");
}

reverseArray(arrNums);

function reverse(array) {
  console.log(array, "ARRAY");

  var length = array.length;
  var newArr = [];
  for (var i = 0; i < length; i++) {
    newArr.push(array.pop());
  }
  console.log(newArr, "NEW ARRAY");
}

reverse(arrNums);
