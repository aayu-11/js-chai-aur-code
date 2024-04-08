// generate a roanddom color
const randomColor = function () {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    const val = Math.floor(Math.random() * 16)
    color += hex[val]
  }
  return color
}

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let intervalID
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
}
const stopChangningColor = function () {
  clearInterval(intervalID)
  intervalID = null
}
start.addEventListener('click', startChangingColor)
stop.addEventListener('click', stopChangningColor)