class User {
  constructor(username) {
    this.username = username
  }
  logMe() {
    console.log(`Username: ${this.username}`)
  }
  static createId() {
    return `123`
  }
}
const hitesh = new User('Hitesh')
// console.log(hitesh.createId())  // can not  do it beacause createId method is static 

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}
const iphone = new Teacher('iphone', 'i@phone.com')
iphone.logMe()
// console.log(iphone.createId())  // child class also don't have the access of static methods
