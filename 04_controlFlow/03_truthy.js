// truthy and falsy values
// falsy values: undefined, null, 0, '', NaN, -0, 0n
// truthy values: NOT falsy values 
// "0", " ", [], {},'false' function(){} are truthy values

const userEmail = {};
if (userEmail) {
  console.log('You are logged in');
}
else {
  console.log('Please log in');
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log('Object is empty');
}


// Nullish coalescing operator (??):  returns the right-hand side operand when the left-hand side operand is null or undefined.

let val1 = 4 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10 ?? 20;
console.log(val1);

// ternary operator : condition ? exprIfTrue : exprIfFalse

const price = 100;
price > 90 ? console.log('Price is greater than 90') : console.log('Price is less than or equal to 90');


