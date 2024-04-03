// IIFE --> Immediately Invoked Function Expression

// IIFE is a function that is executed immediately after it is created
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function

// Syntax:

(function () {
  console.log('IIFE')
})();

// IIFE can also take arguments
(function (name) {
  console.log('Hello ' + name)
})('John');

// IIFE can also return values
let result = (function (a, b) {
  return a + b
})(2, 3);

console.log(result);

//IIFE can also be an arrow function

(() => {
  console.log('IIFE Arrow Function');
})()