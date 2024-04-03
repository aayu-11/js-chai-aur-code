// three keyworkds
var c = 300
let b = 200
if (true) {
  // const a = 1 
  let b = 2
  var c = 3
  // console.log(`Inner Scope ${b}`)
} // block scope

// { } // block scope

// console.log(a)
// console.log(`Outer Scope ${b}`)
// console.log(c)

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// scope in node and browser console is different

function one() {
  const username = 'Ayush'
  function two() {
    const website = 'youtube.com'
    // console.log(username)
  }
  // console.log(website)   --> not accessible
  two()
}
one()

// in nested function child can access parent scope but parent can't access child scope
// samee in if block, for loop, while loop, switch case, etc


// +++++++++++++++++++ intersting ++++++++++++++++++++++

console.log(addOne(5))  // allowed

function addOne(num) {
  return num + 1
}

console.log(addTwo(5))  // not allowed
// hoisting is not allowed in function expression
const addTwo = function (num) {
  return num + 2
}

