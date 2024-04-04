const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// buttons.forEach((button) => {
//   console.log(button)
//   button.addEventListener('click', function (e) {
//     console.log(e)
//     console.log(e.target)
//     if (e.target.id == 'green') {
//       body.style.backgroundColor = 'lightseagreen'
//     }
//     if (e.target.id == 'red') {
//       body.style.backgroundColor = 'tomato'
//     }
//     if (e.target.id == 'yellow') {
//       body.style.backgroundColor = 'yellowgreen'
//     }
//     if (e.target.id == 'blue') {
//       body.style.backgroundColor = 'darkslateblue'
//     }
//   })
// })

// better way of doing it 

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.backgroundColor
    const bgColor = window.getComputedStyle(e.target).backgroundColor
    body.style.backgroundColor = bgColor
  })
})