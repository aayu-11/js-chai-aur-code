const tinderUser = new Object() // singleton object
tinderUser.id = '123abc'
tinderUser.name = 'sam'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// nested object -->
const regularUser = {
  email: 'some@gmail.com',
  fullName: {
    UserFullName: {
      firstName: 'Ayush',
      lastName: 'Kumar'
    }
  }
}
// console.log(regularUser.fullName?.UserFullName)  //optional chaining

const obj1 = {
  1: 'a',
  2: 'b'
}
const obj2 = {
  3: 'c',
  4: 'd'
}
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) // object assign is a mthod which assign one or more objects to a target Object
// by default all values are copied in obj1 but if we want to create a new target object then we can pass an empty object as first argument '{ }'

// console.log(obj1)
// console.log(obj3)

const obj3 = { ...obj1, ...obj2 } // spread operator
// console.log(obj3)

const users = [
  { id: 1, name: 'Ayush' },
  { id: 2, name: 'Kumar' },
  { id: 3, name: 'Sam' }
]
// console.log(users[0].name)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // returns an array of keys

// console.log(Object.values(tinderUser)) // returns an array of values

// console.log(Object.entries(tinderUser)) // returns an array of arrays from object key value pairs

// console.log(tinderUser.hasOwnProperty('id')) // returns true if the object has the property else false

// Object destructuring

const course = {
  courseName: 'Js in hindi',
  price: '999',
  courseInstructor: 'Hitesh Choudhary'
}

const { courseInstructor: instructor } = course
console.log(instructor)

// const navBar = ({ company }) => {

// }
// navBar(company='Hitesh')    // how object destructing works in react

// Json apis
// {
//   name: 'aayu',
//     courseName: 'Js chai aur code',
//       price: 'free'
// }

// [
//   {},
//   {},
//   {}
// ]

