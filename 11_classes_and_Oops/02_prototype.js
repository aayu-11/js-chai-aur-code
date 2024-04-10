function mul4(num) {
  return num * 4;
}
mul4.power = 2
console.log(mul4(5))
console.log(mul4.power)
console.log(mul4.prototype)

function createUser(username, score) {
  this.username = username
  this.score = score
  console.log(this)
}

createUser.prototype.increment = function () {
  this.score++
}
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`)
}

const chai = new createUser('chai', 25)
const tea = new createUser('tea', 40)
chai.printMe()


// The new keyword in JavaScript does a few things behind the scenes when it's used to create a new object:

// Creates a new object: new creates a brand new, empty object: {}.

// Sets the prototype: The [[Prototype]] of the new object is set to the prototype object of the constructor function. This means the new object has access to the methods and properties defined on the constructor's prototype.

// Sets the this value: Inside the constructor function, this is set to point to the newly created object.

// Executes the constructor function: The constructor function is called with the specified arguments, and its this value set to the new object.

// Returns the new object: If the constructor function doesn't explicitly return an object, the new object created by new is returned.

// In your code, when you do new createUser('chai', 25), here's what happens:

// A new object is created: {}.
// The [[Prototype]] of the new object is set to createUser.prototype.
// this inside createUser is set to the new object.
// createUser is called with 'chai' and 25 as arguments. This sets the username and score properties on the new object.
// The new object is returned and assigned to chai.
// So, chai is an object with username and score properties, and it has access to the increment and printMe methods through its prototype.

// f you call a constructor function without the new keyword, the context (this) inside the constructor function will not be a new object, but rather it will be the global object (window in a browser, global in Node.js) or undefined if in strict mode. This can lead to unexpected behavior.

// Here's an example:
// function User(username, loginCount, signedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.signedIn = signedIn;
// }

// const userOne = User("hitesh", 12, true);
// console.log(userOne); // undefined
// console.log(window.username); // "hitesh" (in a browser)

// In this example, because User is called without new, this inside User is the global object. So, username, loginCount, and signedIn are added as properties to the global object, not to a new object as intended.

// userOne is undefined because User doesn't return anything. When a function doesn't have a return statement, it returns undefined by default.

// // This is why it's important to use the new keyword when calling a constructor function. If you want to ensure that a constructor cannot be called without new, you can add a check at the beginning of the constructor:


// function User(username, loginCount, signedIn) {
//   if (!(this instanceof User)) {
//     throw new Error("User must be called with new");
//   }
//   this.username = username;
//   this.loginCount = loginCount;
//   this.signedIn = signedIn;
// }

// This will throw an error if User is called without new.