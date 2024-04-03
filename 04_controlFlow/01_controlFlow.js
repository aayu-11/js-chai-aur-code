// if statement

// if (true) {
//   console.log("This will run ");
// }

// if (false) {
//   console.log("This will not run");
// }

// comparison operators
//  ==, ===, !=, !==, >, <, >=, <=

// if (2 == '2') {
//   console.log('Inside if');
// }
// if (2 === '2') {  // === is strict equality operator which checks for value and type
//   console.log('Inside if');
// }

// const temperature = 20;

// if (temperature > 30) {
//   console.log('It is hot outside');
// }
// else {
//   console.log('It is cold outside');
// }

// const balance = 500;
// if (balance > 100) {
//   console.log('You have money in your account');
// }
// else if (balance === 100) {
//   console.log('Your balance is 100');
// }
// else if (balance < 100) {
//   console.log('You are poor');
// }
// else {
//   console.log('something went wrong!');
// }

const userLoggedIn = true
const debitCard = true
const loggedInWithGoogle = false
const loggedInWithEmail = true

if (userLoggedIn && debitCard) {
  console.log('You can purchase');
}
if (userLoggedIn || loggedInWithGoogle || loggedInWithEmail) {
  console.log('You are logged in');
}