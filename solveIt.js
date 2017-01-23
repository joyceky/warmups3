/*
If the number is less than 0,
    return -1
If the number is 0
    return 1
If the number is anything greater than 0
    multiply the nubmer by n-1 and
    run the function again with n-1

function recursiveFactorial() {

}    
inputs: integer input
outputs: integer factorial value output
*/


function solveIt(num)
{
  if (num < 0) {
      return -1;
  }
  else if (num == 0) {
      return 1;
  }
  else {
      return (num * solveIt(num - 1));
  }
}

var result = solveIt(-1);
var result = solveIt(0);
var result = solveIt(8);
