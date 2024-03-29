//array
const myArr = [0, 1, 2, 3, 4, 5]
// in js arrays are resizable and contain a mix of diff data types

//by default copy and other operations in array in js creates a shallow copy
// shallow copy --> copy object and orignal object elements share same reference point
// deep copy --> deep copy of an object doesn't share same references
// deep copy can be created using json.stringify() and then jsom.parse() methods

const heroes = ['iron-man', 'thor', 'dr-strange']
// console.log(myArr[0])
const myArr2 = new Array(1, 3, 4, 5, 6)
// console.log(myArr2)

//Arrya methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(0)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(8))

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice, splice

console.log('A', myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log('B', myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log('C', myArr)