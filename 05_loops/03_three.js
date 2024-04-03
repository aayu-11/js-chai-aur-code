// for of loop

// [{},{},{}]
// ["","",""]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const val of arr) {
//   console.log(val);
// }

// const greeting = "Hello World";
// for (const char of greeting) {
//   console.log(char);
// }

// const obj = Object.values(greeting);
// console.log(obj); 

const map = new Map()   // map remembers the order of insertion while object does not
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('IN', 'India');  // duplicate key will be ignored

console.log(map);

for (const [key, value] of map) {
  console.log(key, value);
}

const obj = {
  name: 'John',
  age: 30,
  country: 'India'
};

// for (const [key, value] of obj) {
//   console.log(key, value);  // TypeError: obj is not iterable

// }