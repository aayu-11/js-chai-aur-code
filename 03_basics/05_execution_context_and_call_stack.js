// Javascript Execution Context

// Global Execution Context { window }
// Function Execution Context { function }
// Eval Function Execution Context { eval }

// Memory Creation Phase
// Execution Phase

let val1 = 10;
let val2 = 20;

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}
let result = add(val1, val2);
let result2 = add(30, 40);

// Global Execution  --> `this`

// Memory Creation Phase
// val1 = undefined
// val2 = undefined
// add = defination
// result = undefined
// result2 = undefined

// Execution Phase
// val1 = 10
// val2 = 20
// add --> diff execution context
// ------ new variable environment and execution thread
// ------ Memory Creation Phase
// ------ num1 = undefined
// ------ num2 = undefined
// ------ result = undefined
// ------ Execution Phase
// ------ num1 = 10
// ------ num2 = 20
// ------ result = 30
// ------ return 30 to global execution context ant this execution context is removed from call stack
// result = 30
// add --> diff execution context
// ------ new variable environment and execution thread
// ------ Memory Creation Phase
// ------ num1 = undefined
// ------ num2 = undefined
// ------ result = undefined
// ------ Execution Phase
// ------ num1 = 30
// ------ num2 = 40
// ------ result = 70
// ------ return 70 to global execution context ant this execution context is removed from call stack
// result2 = 70


// ------------------------------ Call Stack ------------------------------

// 1. Global Execution Context
// 2. add(10, 20)  --> Execution Context --> add(10, 20) is removed from call stack
// 3. add(30, 40)  --> Execution Context --> add(30, 40) is removed from call stack

// lifo --> last in first out



// ------------------------------ brief Notes ------------------------------

// 🔵The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// 🔵Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// 🔵Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// 🔵Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase
// 2. Execution phase
// 📝The return value of the 'Function Execution' context is passed to the Global Execution Context
