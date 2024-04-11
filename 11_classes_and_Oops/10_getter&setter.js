class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }
  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value
  }
  get password() {
    return `${this._password}ayush`
  }
  set password(value) {
    this._password = value
  }
}
// In JavaScript, getters and setters are special types of methods in an object or class, used to get and set the values of variables. The get syntax binds an object property to a function to be called when that property is looked up, while the set syntax binds an object property to a function to be called when there is an attempt to set that property.

//When you create a new User and set the email and password, the setter methods are automatically called

// his calls the email and password setters, which set the values of _email and _password.

// When you access hitesh.email and hitesh.password, the getter methods are called:

// Getters and setters are useful for data encapsulation and validation. They allow you to control how data is accessed and modified in an object.

const hitesh = new User('h@hitesh.ai', 'abc')
const mail = hitesh.email
console.log(mail)

// The underscore _ is often used in JavaScript as a naming convention to indicate that a property or variable is intended to be private or protected, meaning it should not be accessed directly.

// In your code, _email and _password are used to store the actual values of the email and password properties. The email and password getters and setters then provide controlled access to these values.

// Here's how it works:

// When you do hitesh.email = 'h@hitesh.ai', it calls the email setter with 'h@hitesh.ai' as the argument. The setter then assigns this value to _email.

// When you do console.log(hitesh.email), it calls the email getter, which returns _email.toUpperCase().

// This allows you to add additional logic when getting or setting a property. For example, the email getter converts the email to uppercase.

// However, it's important to note that this is just a convention. JavaScript does not have built-in support for private properties (although this is changing with recent additions to the language), so _email and _password can still be accessed directly. The underscore is a way for developers to signal to others (and to themselves) that a property should not be accessed directly.