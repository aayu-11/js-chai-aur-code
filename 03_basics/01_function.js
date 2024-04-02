function sayMyname() {
  console.log('A')
  console.log('y')
  console.log('u')
  console.log('s')
  console.log('h')
} // function definition

sayMyname // function reference
sayMyname() // function execution

// function to add two numbers
// function add(a, b) {
//   console.log(a + b)
// // }
// add(1, 2) // 3
// add(3, '4') // 34

// parameters --> a, b
// arguments --> 1, 2

// function add(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     console.log(a + b)
//   } else {
//     console.log('Invalid arguments')
//   }
// }  // type checking

// add(1, 2) // 3
// add(3, '4') // Invalid arguments

// function add(a, b) {
//   console.log(a + b)
// }
// const result = add(1, 2) // 3
// // console.log(result) // undefined because add function does not return anything

// function add(a, b) {
//   return a + b
//   console.log('This will not be printed')
// }
// const result = add(1, 2) // 3
// console.log(result) // 3 because add function returns the sum of a and b

// function loginMessage(name) {
//   if (!name) {
//     return 'Please provide a name'
//   }
//   if (typeof name !== 'string') {
//     return 'Name should be a string'
//   }
//   if (name === undefined) {
//     console.log('Name is undefined')
//     return
//   }
//   return `Welcome ${name}`
// }
// loginMessage('John') // Welcome John
// console.log(loginMessage('John')) // Welcome John
// console.log(loginMessage(4)) // Welcome undefined


// function calculateCartPrice(num1, num2, ...prices) {  // rest operator
//   let total = 0
//   for (let price of prices) {
//     total += price
//   }
//   return total
// }
// console.log(calculateCartPrice(10, 20, 30, 40)) // 70

// // passing object to a function
// const user = {
//   username: 'john',
//   price: 100
// }
// function handleObject(anyobject) {
//   anyobject.price = 200
//   console.log(`Price is ${anyobject.price}`)
// }
// handleObject(user) // Price is 200

// handleObject({ price: 300 }) // Price is 200

// // passing array to a function
// const myArray = [1, 2, 3]
// function handleArray(anyarray) {
//   anyarray.push(4)
//   return anyarray
// }
// console.log(handleArray(myArray))  // [1, 2, 3]
// console.log(handleArray([1, 2, 3])) // [1, 2, 3, 4]