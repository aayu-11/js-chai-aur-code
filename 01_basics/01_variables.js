const accountId = 122443
let accountEmail = "ayush@gmail.com"   // let is scope friendly
var accountPassword = "12345"    // var doesn't work with scope
accountCity = "Jaipur"
let accountState // it will be logged as undefined    

// NOTE: mostly we will use const and let only prefer not to use var because of issue in block scope and functional scope

// accountId = 34   // not allowed in javascript
console.log(accountId)

accountEmail = "kumar@gmail.com"
console.log(accountEmail)

accountCity = "Bangaluru"
console.log(accountCity)

accountPassword = 23124     // we can change number as well as data type of both let and var type of variables
console.log(typeof (accountPassword))

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  // it will prinit all values at once
