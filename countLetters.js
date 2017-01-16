// Count It
//
// Write a function that counts the letters in a string.
//
// Input
//
// A string. e.g. "Hello World"
//
// Output
//
// The letters and how often they show up. e.g. d:1 e:1 h:1 l:3 o:2 r:1 w:1 NOTE: the function should not call console.log()
//
// Special
//
// Case-insensitive. So convert all letters to lowercase
// Ignore whitespace
// Ignore anything not a-z
// Challenge input:
//
// "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."
// Problem solving is a skill that can be sharpened with dedicated practice.
// Think ahead! Break down the problem before you write a single line of code.
// Write out comments in plain english (non programmer terms) that detail what needs to be done to use the given input to create the expected output.
// After you have broken down the problem, if needed, search the internet for how to do specific tasks, NOT for the solution to the entire problem.
"use strict";

function countLetters (str) {
  var string = str.toLowerCase();
  var charArr = [];
  var charCount = {};

  for (var i = 0; i < string.length; i++) {
    if(charArr.length === 0) {
      charArr.push(string.charAt(i));
      charCount[charArr[i]] = 1;
    }
    else if (string.charAt(i) in charCount) {
      charArr.push(string.charAt(i));
      charCount[charArr[i]] = charCount[charArr[i]] + 1;
    }
    else {
      charArr.push(string.charAt(i));
      charCount[charArr[i]] = 1;
    }
  }
  return charCount;
}

console.log(countLetters("Liberty Truth JUSTICE"));
console.log(countLetters("bleep TEST test test test"));


//
// for (var j = 0; j < charArr.length; i=j++) {
//   charCount[charArr[j]] = "1";
// }
