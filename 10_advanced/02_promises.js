const promiseOne = new Promise(function (resolve, reject) {
  // do some async task
  // db calls, cryptography, network calls
  setTimeout(() => {
    console.log('Async Task is complete!')
    resolve()
  }, 1000);
})

promiseOne.then(function () {
  console.log('Promise Consumed!')
})  // --> related to resolve

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async Task 2')
    resolve()
  }, 1200)
}).then(function () {
  console.log('Async 2 resolved !')
})

const thirdPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ user: 'chai', email: 'chai@examle.com' })
  }, 1200);
})

thirdPromise.then(function (user) {
  console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false
    if (!error) {
      resolve({ username: 'ayush', password: 1234 })
    }
    else {
      reject('something went wrong!')
    }
  }, 1200);
})

promiseFour.then((user) => {
  console.log(user)
  return user.username
}).then((username) => {
  console.log(username)
}).catch(function (err) {
  console.log(err)
}).finally(() => console.log('the promise is either resolved or rejected'))



const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true
    if (!error) {
      resolve({ username: 'javascript', password: 1234 })
    }
    else {
      reject('js  went wrong!')
    }
  }, 1200);
})
async function consumPromisFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
consumPromisFive()

async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    // console.log(response)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))
