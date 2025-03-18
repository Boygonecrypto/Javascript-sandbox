// [element, element2, element3]
// arrays usually consists of the same datatype
// empty arrays are always falsy value
const students = [
  "Uthman",
  "David",
  "Quadri",
  "Isaac",
  "John Paul",
  "Uju",
  "Samuel",
];
// array properties
console.log(students);
console.log(students.length);
// getting elements from an array, position
console.log(students[0]);
console.log(students[2]);
// change elemenrs in an array, positiom
// students[0] = "Azeez";
// console.log(students);
// students[students.length - 1] = "John Doe";
// console.log(students);
// array methods
// methods to add and remove elements from  an array
// structured datatype stack LIFO
// push, unshift (add elements to an [])
students.push("Michael");
students.push("Juwon");
students.unshift("Uthman");
// pop ans shift
students.pop();
students.shift();

console.log(students);

// includes
console.log(students.includes("David"));
// indexOf lastIndexOf
console.log(students.indexOf("Uju"));
console.log(students.lastIndexOf("Uju"));
console.log(students.at(2));

// extract portions of an array slice(start, end(non-inclusive))
console.log(students.slice(0, 3));
console.log(students.slice(4, 7));
// methods to convert arrays to strings
// join, toString
console.log(students.join("-"));
// Another seperator
console.log(students.toString());
// iterator methods(going over each element)
// higher order methodsa(functions) -
// it needs another function as parameter (callback function)
// forEach, map, find, filter, some, every, reduce
// forEach - executes a function for every element in an array
students.forEach((student) => {
  console.log(student.toUpperCase());
});
// give me the first letter of every student name in the students arr
students.forEach((student) => {
  console.log(student.charAt(0));
});
// map - creates a new array with the result of the function
const smallCaseStudents = students.map((student) => student.toLowerCase());
console.log(smallCaseStudents);
// filter - creates a new array with elements that pass a test(search condition)
const myNums = [3, 5, 6, 8, 10, 1, 4, 2];
// > 5
const greaterThan5 = myNums.filter((num) => num > 5);
console.log(greaterThan5);

const evenNumbers = myNums.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const oddNumbers = myNums.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

const lengthGreaterThan6 = students.filter((student) => student.length > 6);
console.log(lengthGreaterThan6);
// find - find returns the first element that passes a test (search condition)
const findGreaterThan5 = myNums.find((num) => num > 5);
console.log(findGreaterThan5);
const findStudentWithFiveCharacters = students.find(
  (student) => student.length == 5
);
console.log(findStudentWithFiveCharacters);
// some - returns true if at least one of every element passes a test
const ifSumGreaterThan5 = myNums.some((num) => num > 5);
console.log(ifSumGreaterThan5);

// every returns true if all elements passes a test
const ifAllGreaterThan5 = myNums.every((num) => num > 5);
console.log(ifAllGreaterThan5);

// reverse, sort, concat, reduce
// string split
const carBrands = ["Toyota", "RollsRoyce", "Ferrari", "Tesla", "BMW"];
console.log(carBrands);
// console.log(carBrands.reverse());
console.log(carBrands.sort());
// a-z
console.log(carBrands.sort().reverse());
// z-a
// starting numbers 0 - up, up - 0
const prices = [200, 4000, 650, 100, 3500];
console.log(prices.sort());
// buggy
console.log(prices.sort((a, b) => a - b));
// smallest to largest
console.log(prices.sort((a, b) => b - a));
// high to low

// reduce = reduce every element in an array into a single value
// two parameters, call back function, start point
const totalPrice = prices.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(totalPrice);

// concat
const africanCountries = ["Togo", "Sotuh Africa", "Ghana", "Zanziba"];
const asianCountries = ["singapore", "Japan", "North Korea"];
const holidayCountries = africanCountries.concat(asianCountries);
console.log(holidayCountries);

// string split
const fruit = "banana";
// split method on a string
console.log(fruit.split(""));
console.log(fruit.split("a"));

// write a function that reverses the letter in a word
// cat - tac
const reverseWord = (word) => {
  return word.split("").reverse().join("");
};
console.log(reverseWord("cat"));
console.log(reverseWord("gel"));

// palindrome - words that are spelt the same front and back
// madam level tat noon pap eye
function isPalindrome(word) {
  // default everything to a standard
  return word.toLowerCase() == word.split("").reverse().join("").toLowerCase();
}
console.log(isPalindrome("Madam"));

// SET - It gives us unique value in  an array
const users = ["John", "Dave", "Nate", "John", "Dave"];
console.log(new Set(users));
