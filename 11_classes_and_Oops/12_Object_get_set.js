const User = {
  _email: 'ayush@123.com',
  _password: 'abc',
  get email() {
    return this._email.toLowerCase()
  },
  set email(value) {
    this._email = value
  }
}

const tea = Object.create(User)
console.log(tea.email)