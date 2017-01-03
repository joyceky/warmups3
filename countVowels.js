/*
Function takes one string
Function returns number of vowels in string
Y is not a vowel
*/

'use strict';

function countVowels (string) {
  var vowels = string.match(/[aeiou]/gi);
  return vowels.length;
}

var str1 = "I am a string with some (11) vowels in it";
console.log(countVowels(str1));
