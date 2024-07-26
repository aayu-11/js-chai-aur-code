let score = "22avc";
let score2 = null;
let score3 = undefined;

// console.log(typeof score)

let valueInNumber = Number(score); // typeConversion of score in number
let valueInNumber2 = Number(score2); // typeConversion of null in number
let valueInNumber3 = Number(score3); // typeConversion of undefined in number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)  //  "22avc" --> NaN (Not a number)

// console.log(typeof valueInNumber2)
// console.log(valueInNumber2)  // null --> 0

// console.log(typeof valueInNumber3)
// console.log(valueInNumber3)  // undefined --> NaN

// true --> 1
// false --> 0

let isLoggedIn = "";
let valueInBoolean = Boolean(isLoggedIn);
// console.log(typeof valueInBoolean)
// console.log(valueInBoolean)

// in boolean
// "" --> false
// 0 --> false
// null --> false
// undefined --> false
// 1 --> true   (any positive or negative number will be converted to true)

// ************************ Operatioins ************************
let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "A";
let str2 = " B";
// console.log((str1 + str2))

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2");

// console.log(+true)
// console.log(+"")

let num1, num2, num3;
num1 = num2 = num3 = 4 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

