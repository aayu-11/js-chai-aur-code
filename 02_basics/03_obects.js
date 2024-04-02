// A singleton is an object that can only be instantiated once. This means that there can only be one instance of a singleton object in a JavaScript program.
// Singletons are often used to create global objects that can be accessed from anywhere in the program.
// created using constructor
// object.create()

// Literal objects are not singletons. This means that there can be multiple instances of a literal object in a JavaScript program.
// Literal objects are often used to create objects that represent specific data or functionality.

const mySym = Symbol('key1')
console.log(typeof mySym)

const JsUser = {
  name: 'ayush',
  "full name": 'Ayush Kumar',
  age: 22,
  [mySym]: 'myKey1',   //use square brackets to use it as a symbol
  location: "Roorkee",
  email: 'ayushkumar.ak2409@gmail.com',
  isLoggedIn: true,
  lastLogin: ['monday', 'saturday']
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

console.log(JsUser)

JsUser.email = 'ayush@google.com'
// Object.freeze(JsUser)
// JsUser.email = 'ayush@microsoft.com'   // this value will not change because obect is freezed

console.log(JsUser)

JsUser.greeting = function () {
  console.log('Hello user')
}
JsUser.greetingTwo = function () {
  console.log(`Hello js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())