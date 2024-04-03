const coding = ['coding', 'is', 'fun', 'and', 'creative'];
// coding.forEach(function(word) {
//   console.log(word);
// });

// foreach is an array method that executes a provided function once for each array element
// foreach does not mutate the array on which it is called
// foreach does not return anything
// foreach is not chainable
// foreach is not breakable
// foreach is not skippable 
// foreach is not returnable
// foreach is a higher order function

coding.forEach((word) => {
  console.log(word);
})

function logWords(word) {
  console.log(word);
}

coding.forEach(logWords);

coding.forEach((word, index, arr) => {
  console.log(word, index, arr);
})

const myCoding = [
  {
    language: 'JavaScript',
    langfile: 'js'
  },
  {
    language: 'Python',
    langfile: 'py'
  },
  {
    language: 'Ruby',
    langfile: 'rb'
  }
]

myCoding.forEach((item) => {
  console.log(item.language, item.langfile);
}) 
