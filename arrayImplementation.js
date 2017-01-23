/*
Create an array data structure with javascript without using an array
use an object

Can somebody help me out? I can pass Test Case 0, but for some reason I can't seem to pass Test Case 1 using Javascript.
    // Declare second integer, double, and String variables.
var i1;
var d1;
var s1;
    // Read and save an integer, double, and String to your variables.
i1 = parseInt(readLine());
d1 = parseInt(readLine());
s1 = readLine();
    // Print the sum of both integer variables on a new line.
console.log(i + i1);
    // Print the sum of the double variables on a new line.
console.log((d + d1).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
console.log(s + s1);
11  | Add Comment Permalink

SqMonkey87 9 months ago
I can say I was immediately overwhelmed having never seen the stdin stuff before, so you've got a leg up on me using readLine(), if that's how I was supposed to pull out the inputs. Day 1 and already out of my element. I saw the inputs were logged in an array so I defined each of my variables by the array index number
like, i1 = stdin_whateverItSaid_array[0]
then did basically what you did, but it kept concatenating my numbers as if the predefined var i, d, f were all strings so I ran all my number variables through Number()
like, Number(i, i1, d, d1);
to make sure JS was reading them as numbers before the console.log part and that worked to pass for me.
6   | Add Comment Parent Permalink

kjjtruong 8 months ago
Thanks! yea your solution works too. Like raincoder pointed out below, it was because I was using parseInt() on the double. I guess I could've ran all my number variables through Number() like you as well.

*/
