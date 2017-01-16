/*
Specs:

pop()
push()
length()

Singly Linked List:
*/

'use strict';

let tail = null;
let count = 0;

function ANode(value, prev) {
  this.value = value;
  this.prev = prev;
}

function push(value) {
  let oldTail = tail;

  let prevNode = new ANode(value, oldTail);
  tail = prevNode;
  count++;
  console.log(oldTail, ":Old Tail");
  console.log(tail, ":Tail");
}

function pop() {
  if (tail === null) {
    return null;
  }
  else {
    let oldTail = tail;
    tail = oldTail.prev;
    return oldTail;
  }
}

push('hello');
push('world');

let n;

while ((n = pop()) !== null) {
  console.log(n.value);
}


// while (tail !== null) {
//   console.log(count, tail.value);
//   count --;
//   tail = tail.prev;
// }
