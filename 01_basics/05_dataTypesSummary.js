// Premitive --> call by value
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// js is dynamically typed

const score = 100
const scoreValue = 100.23
const isLoggedIn = false
const outsideTemp = null
let userEmail
//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumebr = 2348029485028104928304821034810238n
console.log(typeof bigNumebr);

// Non premitive or Reference Type --> call by referenece
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
  name: "ayush",
  age: 22
}

const myFunction = function () {
  console.log("hi");
}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
// jjkkk       Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// *********************** Memory ********************

// Stack (Premitive), Heap (non-Premitive)
let myName = "Ayush"
let anotherName = myName
anotherName = "Vishu"
console.log(anotherName)
console.log(myName)

let userOne = {
  email: "akki@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ayush@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

