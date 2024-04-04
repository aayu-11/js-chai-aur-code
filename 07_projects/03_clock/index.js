const timeDiv = document.querySelector('#time')
const body = document.body

timeDiv.addEventListener('mouseover', function () {
  body.classList.add('hovered')
})

timeDiv.addEventListener('mouseout', function () {
  body.classList.remove('hovered')
})

const clock = document.getElementById('time')

setInterval(() => {
  let date = new Date()
  clock.textContent = date.toLocaleTimeString()
}, 1000);