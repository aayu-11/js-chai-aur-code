// let myName = 'hitesh     '

// console.log(myName.truelength)
// objective --> create a method truelength which will give orignal length of string without whitespaces 

let myHeros = ['thro', 'spiderman']

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',
  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`)
  }
}
Object.prototype.hitesh = function () {
  console.log('hitesh is present in all objects')
}
// heroPower.hitesh()
// myHeros.hitesh()

Array.prototype.heyHitesh = function () {
  console.log('hitesh says hello')
}
myHeros.heyHitesh()
// heroPower.heyHitesh()  // object doesn't have access to user defined Array prototype function

const user = {
  name: 'chai',
  email: 'chai@google.com'
}
const Teacher = {
  makeVideo: true
}
const TeachingSupport = {
  isAvilable: false
}
const TAsupport = {
  makeAssignment: 'JS Assignment',
  fullTime: true,
  __proto__: TeachingSupport
}
Teacher.__proto__ = user // example of prototypel inheritance

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = 'chaiAurCode     '
String.prototype.trueLength = function () {
  console.log(`${this}`)
  console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
'ayush'.trueLength()
'hello'.trueLength()