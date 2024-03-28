const name = "Ayush"
const repoCount = 6
// console.log(name + repoCount + "hi") 
// not a good practice

console.log(`hi ${name} your repocount is ${repoCount}`)   // string interpolation

const gameName = new String('Ayush-Kumar-01')
console.log(typeof gameName)
// String is an object here and  'Ayush' is stored in gameName as key value pair character by character --> chceck in browser console
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())  // this method doesn't change our orignal value
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))   // this method will return the index of 's' character

const newString = gameName.substring(0, 5)
console.log(newString)

const anotherString = gameName.slice(-8, 5)  // start from 8th index from end upto the 4th index from start will be sliced
console.log(anotherString)

const newStringOne = "   Ayush   "
console.log(newStringOne)
console.log(newStringOne.trim())   // this method will trim down all extra spaces

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) // replace the %20 with '-' character

console.log(url.includes('hitesh'))  // check if 'hitesh' is present in the string
console.log(gameName.split('-'))
