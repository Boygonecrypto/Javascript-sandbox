// functions
// function declaration
// function functionName () {write the code}
// log hello world to the console
function logger() {
  console.log("Hello World");
}
// call the function or invoke it
logger();

logger();

// function welcomeUser() {
//   console.log("Welcome User");
// }
// welcomeUser();

// function parameters - they are values passed to the function to use, (paramters)
function welcomeUser(name = "Anon") {
  console.log(`Welcome ${name}`);
}
welcomeUser("Vera");
welcomeUser("Quadri");
welcomeUser("Uthman");
// write a function that add two numbers
function addTwoNumbers(n1, n2) {
  const total = n1 + n2;
  console.log(total);
}
addTwoNumbers(40, 15);
addTwoNumbers(10, 12);

// write a function that computes the difference between 2 numbers
function subtractTwoNumbers(n1, n2) {
  console.log(n1 - n2);
}
subtractTwoNumbers(100, 50);
subtractTwoNumbers(1, 6);
// default parameters
welcomeUser();

// write a function called wordConverter that converts all Alphabets provided toUpperCase
function wordConverter(word = "word") {
  console.log(word.toUpperCase());
}
wordConverter("cat");

// write a function called replaceAllE
// it replaces all of every 'e' in any word provided
function replaceAllE(replace) {
  console.log(replace.toLowerCase().replaceAll("e", "*"));
}
replaceAllE("EYEMENETE");
// write a function called checkLength, it returns the number of characters in the word provided
function checkLength(word) {
  console.log(word.length);
}
checkLength("Hippopotamus");
// write a functio that returns the first character in the word provided
function returnCharacter(word) {
  console.log(word.charAt(0));
}
returnCharacter("brooo");

function giveInitials(firstName, lastName) {
  console.log(firstName.charAt(0) + "." + lastName.charAt(0));
}
giveInitials("Uthman", "Ajanaku");
// write a function that extracts the first 5 letters of any word provided
function toExtract(extract) {
  console.log(extract.substr(0, 5));
}
toExtract("Michael");
// write a function to let us know if a number is postive or negative
function detectNegativeOrPositive(num) {
  if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
detectNegativeOrPositive(-5);

// FUNCTION TO A FACTORY THAT PRODUCES A PRODUCT
// IT MUST RETURN A VALUE
function sayHello() {
  return "say Hello";
}
const val = sayHello();
console.log(val);

// write a function that multiplies two numbers
function multiplyTwoNumbers(n1, n2) {
  return n1 * n2;
}
console.log(multiplyTwoNumbers(5, 5));
// write a function that returns the average of 3 numbers
function averageNumber(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(averageNumber(10, 10, 10));

//   write a function that converts weeks to days
function toConvert(weeks) {
  const days = weeks * 7;
  return days;
}
console.log(toConvert(4));

// write a function that converts hours to minutes
function convertHoursToMinutes(hours) {
  const min = hours * 60;
  return `${hours} hours is equal to ${min} minutes`;
}
console.log(convertHoursToMinutes(2));

// converts years to months usinh proper strings
function convertYearToMonths(years) {
  const months = years * 12;
  return `${years} years will give you ${months} months`;
}
console.log(convertYearToMonths(27));
// write a function that returns 40
function returnsNumbss() {
  return 40;
}
console.log(returnsNumbss());

// arrow expressiom
const myName = function () {
  return "john";
};
console.log(myName());

// function expression that divides two numbers
const divideTwoNumbers = function (n1, n2) {
  return n1 / n2;
};
console.log(divideTwoNumbers(9, 3));
// hoisting
// with function declaration javascrypt hoists it above

removealla("email");
function removealla(word) {
  console.log(word.replace("a", " "));
}
// arrow function let functionName = () => {}
const myArrowFunction = () => {
  console.log("Arrow Function");
};
myArrowFunction();
// write an arrow function checkWinner that takes in two scores as a parameter
// your function should return different outcomes based on the score
// if scoreA is more than B retur scoreA wins and cater for all other scenarios
const checkWinner = (scoreA, scoreB) => {
  if (scoreA > scoreB) {
    return "`scoreA with ${scoreA} wins`";
  } else if (scoreB > scoreA) {
    return "`scoreB with the ${scoreB} wins`";
  } else {
    return "IT IS A DRAW";
  }
};
console.log(checkWinner(100, 100));

// write a function called calculateBMI
// that takes in body mass and height as a parameter
// the function should return the BMI index rounded to 2 dec places

const calculateBMI = (weight, height) => {
  const BMI = weight / height ** 2;
  return BMI.toFixed(2);
};
console.log(calculateBMI(70, 1.5));

// 2. write a function using the result of the BMI calc above
// to determine the BMI category
// less than 18.5 is underweight
// anything between 18.5 and 24.9 is Normal weight
// between 25 and 29.9 is overweight and anything else is obese
const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return `The patient with the BMI below 18.5 is overweight`;
  } else if (bmi > 18.5 && bmi <= 24.9) {
    return `The patient with the BMI  is Normal weight`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `The patient with the BMI is overweight`;
  } else {
    return `The patient is Obsese`;
  }
};
console.log(getBMICategory(calculateBMI(70, 1.75)));
