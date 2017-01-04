// Write a function that accepts a string consisting entirely of brackets ([](){}) and returns whether it is balanced. Every "opening" bracket must be followed by a closing bracket of the same type. There can also be nested brackets, which adhere to the same rule.
//
// f('()[]{}(([])){[()][]}') // true
// f('())[]{}') // false
// f('[(])') // false


'use strict';

function bracketBalancer (string) {
  var parentheses = [];
  var square = [];
  var curly = [];

  for (let i = 0; i < string.length; i++) {
    switch (string.charAt(i)) {
      case "{":
        curly.push('{');
        break;
      case "}":
        curly.pop();
        break;
      case "(":
        parentheses.push('(');
        break;
      case ")":
        parentheses.pop();
        break;
      case "[":
        square.push('[');
        break;
      case "]":
        square.pop();
        break;
    }
  }

  var numberUnmatched = parentheses.length + curly.length + square.length;
  var brackets = parentheses + curly + square;

  if (parentheses.length !== 0 || curly.length !== 0 || square.length) {
    return ("You have " + numberUnmatched + " unmatched brackets. " + brackets);
  }
  else {
    return ("Brackets are balanced!");
  }
}

var matched = "()[]{}(([])){[()][]}";
var matched1 = "()[]{}(([])){{[]}}{[()][]}";
var unmatched = "({[})";
var unmatched1 = "[(])";
var unmatched2 = "({{(})";

console.log(bracketBalancer(matched));
console.log(bracketBalancer(matched1));
console.log(bracketBalancer(unmatched2));
console.log(bracketBalancer(unmatched1));
