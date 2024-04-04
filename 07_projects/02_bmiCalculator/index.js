const button = document.querySelector('#calculate')
const resultDiv = document.querySelector('#result')

button.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e)
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  if (height > 0 && weight > 0) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2)
    resultDiv.textContent = `Your BMI is ${bmi}`
  } else {
    resultDiv.textContent = 'Please enter valid height and weight'
  }
})