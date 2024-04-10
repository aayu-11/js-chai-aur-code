// const user = {
//   username: 'Hitesh',
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(`username: ${this.username}`)
//     console.log(this)
//   }
// }   // object literal

// console.log(user.getUserDetails())
// console.log(this)

// const promisOne = new Promise()  // --> here new is constructor function
// const myDate = new Date()

function User(username, loginCount, signedIn) {   // this is independent of user literal object created above
  this.username = username
  this.loginCount = loginCount
  this.signedIn = signedIn
  this.greetings = function () {
    console.log(`welcome ${this.username}`)
  }
  return this    //--> implicitly it is defined by default
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User('Chai aur code', 12, false)
console.log(userOne)  // without using new keyword userTwo arguments will overwrite the values of userOne
console.log(userTwo)
userOne.greetings()

console.log(userOne.constructor);

console.log(userOne instanceof User)