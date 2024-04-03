const user = {
  name: 'John',
  price: 100,
  welcome: function () {
    console.log(`Welcome ${this.name}`) // this keyword is used to access the current context
    console.log(this)
  }
}

// user.welcome()
// user.name = 'Doe'
// user.welcome()

// console.log(this)   // inside node environment this refers to empty object
// while in browser this refers to window object due to global scope difference

// function chai() {
//   let name = 'Chai'
//   console.log(this.name)  // undefined
// }
// chai()

// const chai = function () {
//   let name = 'Chai'
//   console.log(this.name)  // undefined
// }
// chai()

const chaiArrow = () => {
  let name = 'Chai'
  console.log(this)  // undefined
}
chaiArrow()  // returns empty object

// const addTwo = (a, b) => (a + b)  // implicit return

const addTwo = (a, b) => ({ userName: 'Chai' })

console.log(addTwo(2, 3))  // 5

