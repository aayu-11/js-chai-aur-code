// const coding = ['coding', 'is', 'fun', 'and', 'creative'];

// const values = coding.forEach((word) => {
//   console.log(word);
//   return word
// })   // returns undefined
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNums.filter((num) => num % 2 === 0)
// in above line if open scope in arrow function, then return is required
// console.log(newNum);

// const newNum = []
// myNums.forEach((num) => {
//   if (num % 2 === 0) {
//     newNum.push(num)
//   }
// })

const books = [
  { title: 'Book 1', genre: 'Fantasy', publishYear: 2000, edition: 1 },
  { title: 'Book 2', genre: 'Sci-Fi', publishYear: 2001, edition: 2 },
  { title: 'Book 3', genre: 'Mystery', publishYear: 2002, edition: 3 },
  { title: 'Book 4', genre: 'Thriller', publishYear: 2003, edition: 4 },
  { title: 'Book 5', genre: 'Romance', publishYear: 2004, edition: 5 },
  { title: 'Book 6', genre: 'Horror', publishYear: 2005, edition: 6 },
  { title: 'Book 7', genre: 'Adventure', publishYear: 2006, edition: 7 },
  { title: 'Book 8', genre: 'Fantasy', publishYear: 2007, edition: 8 },
  { title: 'Book 9', genre: 'Sci-Fi', publishYear: 2008, edition: 9 },
  { title: 'Book 10', genre: 'Mystery', publishYear: 2009, edition: 10 },
  { title: 'Book 11', genre: 'Thriller', publishYear: 2010, edition: 11 }
]

let userBooks = books.filter((bk) => bk.genre === 'Fantasy')
userBooks = books.filter((bk) => bk.publishYear > 2005)
console.log(userBooks);


