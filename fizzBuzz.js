/*
warmup: Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number
and for the multiples of five print "Buzz". For numbers which
are multiples of both three and five print "FizzBuzz".
*/
'use strict';

//While Loop FizzBuzz with Ternary Operator
function whileFizzBuzz () {
  let i = 1;
  let fizzBuzz = [];

  while (i <= 100) {
    if (i % 15 === 0) {
      fizzBuzz.push("FizzBuzz");
    }
    else if (i % 3 === 0 || i % 5 === 0) {
      i % 3 === 0 ? fizzBuzz.push("Fizz") : fizzBuzz.push("Buzz");
    }
    else {
      fizzBuzz.push(i);
    }
      i++;
  }
  return fizzBuzz;
}
// console.log(whileFizzBuzz());

// TWO STRANGE FIZZBUZZ SOLUTIONS
// 1
for(var i=1;i<100;i++){
   console.log(((['Fizz'][i%3] || '') + (['Buzz'][i%5] || '')) || i);
}
// 2
for( var i = 1; i < 101; i++ ){
    console.log([i,"fizz","buzz","fizzbuzz"][(i%3===0)+2*(i%5===0)]);
}
