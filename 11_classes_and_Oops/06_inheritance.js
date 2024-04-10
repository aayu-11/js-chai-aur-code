class User {
  constructor(username) {
    this.username = username
  }
  logMe() {
    console.log(`USERNAME IS ${this.username}`)
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email
    this.password = password
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`)
  }
}
const chai = new Teacher('hitesh', 'chai@124.com', 1243)
chai.addCourse()

const masalaChai = new User('masalaChai')
masalaChai.logMe()
console.log(chai instanceof Teacher)