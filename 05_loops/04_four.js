const myObj = {
  js: 'javascript',
  py: 'python',
  rb: 'ruby',
};

for (const key in myObj) {
  console.log(key);
  console.log(myObj[key]);
}

const programmingLanguages = ['javascript', 'python', 'ruby'];
for (const key in programmingLanguages) {
  console.log(key);
  console.log(programmingLanguages[key]);
}

// forof loop is used to iterate over the values of an iterable object
// forin loop is used to iterate over the keys of an iterable object

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('IN', 'India');
for (const key in map) {
  console.log(key);  // map is not iterable
}
