const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.map((num) => num * 2)
// console.log(myNums); // does not change original array
// console.log(newNum); // returns new array with doubled values

// chaining map and filter
const newNum = myNums.map((num) => num * 2).filter((num) => num % 4 === 0)
console.log(newNum); // returns new array with doubled values and filtered for multiples of 4

// reduce
const initialValue = 0;
const sum = myNums.reduce((acc, num) => acc + num, initialValue)
console.log(sum); // returns sum of all values in array

const shoppingCart = [
  { product: 'phone', price: 700 },
  { product: 'tablet', price: 900 },
  { product: 'laptop', price: 1200 },
  { product: 'headphones', price: 300 }
]
const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total); // returns sum of all prices in shoppingCart



// chaining map and filter and reduce
const newNum2 = myNums.map((num) => num * 2).filter((num) => num % 4 === 0).reduce((acc, num) => acc + num)
console.log(newNum2); // returns sum of doubled values and filtered for multiples of 4
