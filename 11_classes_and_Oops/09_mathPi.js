
console.log(Math.PI)
// Math.PI = 4
// console.log(Math.PI)   --> not gonna change


const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(discriptor)
// const myNewObject = Object.create(null)
let chai = {
  name: 'ginger chai',
  price: 240,
  isAvilable: true,
  orderChai: function () {
    console.log('chai nhi bni')
  }

}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
Object.defineProperty(chai, 'name', {
  writable: false,
  enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
chai.name = 'elaichi'
console.log(chai.name)// now it can't be modified

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(`${key} : ${value} `)   // name will not appear coz it's enumerable property is set to false
  }
}
