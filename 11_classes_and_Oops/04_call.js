function setUserName(username) {
  // complex db calls
  this.setUserName = username
  console.log('called')
}
function createUser(username, email, password) {
  setUserName.call(this, username)
  this.email = email
  this.password = password
}

const chai = new createUser('chai', 'exxample@gmail.com', '123')
console.log(chai)
