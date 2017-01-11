"use strict";
/* Big O notation allows us to express the time-complexity of an algorithm in its worst case scenario
*/


/* O(1)
Array access is an 0(1) operation
*/
    function accessArrayElement(element) {
      const array = [1, 2, 3, 4, 5, 6, 7];
      return array[element];
    }

    console.log(accessArrayElement(2));

/* O(n)
Searching an array for the index of a specific element is an 0(n) operation
*/
    function searchArray(search) {
      const array = ["fig", "fall", "frog", "fish", "fir"];

      return array.indexOf(search);
    }

    console.log(searchArray("frog"));

/* O(n^2)
Sorting an array with selection sort is an 0(n^2) operation
*/
  var arrayNums = [232, 43, 23, 4, 546, 324];
  console.log(selectionSort(arrayNums));

  function swap(array, index1, index2){
      var temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
  }

  function selectionSort(array){

    var len = array.length,
        min;
    var i, j;

    for (i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (array[j] < array[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i !== min){
            swap(array, i, min);
        }
    }

    return array;
}
