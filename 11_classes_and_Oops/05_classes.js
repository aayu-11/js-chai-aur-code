// class User {
//   constructor(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
//   }

//   encryptPassword() {
//     return `${this.password}abc`
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`
//   }
// }
// const chai = new User('chai', 'chai@abc.com', '123')
// console.log(chai.encryptPassword())
// console.log(chai.changeUserName())

// Behind the scene in js

function User(username, email, password) {
  this.username = username
  this.email = email
  this.password = password
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`
}
User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`
}
const tea = new User('chai', 'chai@abc.com', '123')
console.log(tea.encryptPassword())
console.log(tea.changeUserName())

// In JavaScript, every function and object has a property named prototype by default. The prototype is an object (like a bucket) where you can add methods and properties which will be shared across all instances of that function or object.

// When a function is used as a constructor (like User in your code), the prototype is the object that will be used as the prototype for objects created with that constructor.

// Here's how it works in your code:

// The User function is defined with username, email, and password parameters. Any object created with new User(...) will have these properties.

// Methods are added to User.prototype: encryptPassword and changeUserName. These methods are now available to all objects created with new User(...), but they're stored only once in memory, on the User.prototype object.

// new User('chai', 'chai@abc.com', '123') creates a new object with username, email, and password properties, and its prototype set to User.prototype. This means it has access to the encryptPassword and changeUserName methods.

// tea.encryptPassword() and tea.changeUserName() call the methods on the prototype.

// So, the prototype is a powerful feature in JavaScript that allows you to define methods and properties that are shared across all instances of a function or object, which can be a very memory-efficient way to give objects functionality.

