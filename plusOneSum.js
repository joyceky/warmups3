// Warmup - Write a function that takes an array of integers and returns
// the sum of the integers after adding 1 to each. Write tests instead of
// console.logs :slightly_smiling_face:.
//
//
 /*
INPUT: array of integers
OUTPUT: number (sum of array after adding 1 to each)

pseudocode:

add one to each element of array
*/
"use strict";

module.exports = {

plusOneSum: function ( array ) {
  if(typeof array !== typeof []) {
    return 'Only accepts an array';
  }

  var plusOneArr = array.map(function(x){
     return x + 1;
   });

  var sum = plusOneArr.reduce(add, 0);
    function add(a, b) {
        return (a + b);
    }

    return sum;
}
};
