// conditional statement
// if statement - if (condition true) {
//   lines of code}
if (true) {
  console.log("hello world");
}
// eligible to vote - requirements 18+
const age = 25;
if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password = "@Marionmi2001";
// write an if statement that logs password is strong to the console if the password length is 9 and above
if (password.length >= 30) {
  console.log("PASSWORD IS STRONG");
} else {
  console.log("PASSWORD IS WEAK");
}

// if else statement
if (true) {
  console.log("hello class");
} else {
  console.log("goodbye class");
}

// declare two variables balance and amount and set them to two values
let balance = 18000;
let amount = 20000;

// write an if else statement that checks if a withdrawal of the amount is possible
// if possible log transaction succesful, if not log insufficient funds

if (balance > amount) {
  console.log("Transaction Succesful");
} else {
  console.log("Insufficiient fund");
}
// declare two variables userPin and enteredPin
const userPin = 0901;
const enteredPin = 8701;
// write a condito=ional statement that logs pin correct if the two values are same and incorrect if they are not
if (userPin == enteredPin) {
  console.log("PIN CORRECT");
} else {
  console.log("PIN INCORRECT");
}
const email = "uthmanajanaku@gmail.com";
if (email.includes("@")) {
  console.log("VALID EMAIL");
} else {
  console.log("INVALID EMAIL");
}

// write a program that displays you passed an exam if the score is >= 50 otherwise the system displays you failed the exam
const cutOff = 50;
const score = 60;
if (score >= cutOff) {
  console.log("YOU PASSED THE EXAM");
} else {
  console.log("YOUN FAILED THE EXAM");
}

// write a program that checcks a number and display if it's positive or negative

let number = 40;
if (number > 0) {
  console.log("POSITIVE");
} else {
  console.log("NEGATIVE");
}

// write a program that determines the greater of two numbers (num1 num2)

const num1 = 50;
const num2 = 100;
if (num1 > num2) {
  console.log("num1");
} else {
  console.log("num2");
}

let number1 = 13;
if (number1 / 2 == 0) {
  console.log("EVEN NUMBER");
} else {
  console.log("ODD NUMBER");
}

const purchaseAmount = 50;
if (purchaseAmount > 100) {
  console.log("YOU ARE ELIGIBLE");
} else {
  console.log("Ra si jo werey");
}

const averageA = (54 + 56 + 78) / 3;
const averageB = (67 + 60 + 82) / 3;
console.log(`Team A has an average score of ${averageA}`);
console.log(`Team B has an average score of ${averageB}`);

if (averageA > averageB) {
  console.log("Team A wins");
} else {
  console.log("Team B wins");
}

let timeOfDay = 23;
if (timeOfDay > 10 && timeOfDay < 16) {
  console.log("you should be in class");
} else {
  console.log("You should be at home");
}

const transaction = 3000;
if (transaction > 2500) {
  console.log(`${transaction} will incure a charges of N100`);
} else {
  console.log(`${transaction} will incure a charges of N50`);
}

const word = "Rhythms";

if (
  word.includes("a") ||
  word.includes("e") ||
  word.includes("i") ||
  word.includes("o") ||
  word.includes("u")
) {
  console.log(`${word} includes vowel`);
} else {
  console.log(`${word} includes consonant`);
}

const scoreA = 100;
const scoreB = 100;

if (scoreA > scoreB) {
  console.log("A wins");
} else if (scoreB > scoreA) {
  console.log("B wins");
} else {
  console.log("IT IS A TIE");
}

// WRITE A PROGRAM THAT RATES MOVIES
// ABOVE 8 IS EXCELLENT
// ABOVE 6 IS GOOD
// ABOVE 5 IS AVERAGE
// ELSE IT'S BAD

const movieRating = 4.5;
if (movieRating >= 8) {
  console.log("Excellent Movie");
} else if (movieRating >= 6) {
  console.log("Good Movie");
} else if (movieRating >= 5) {
  console.log("Average Movie");
} else {
  console.log("Bad Movie");
}

// less than 18 - young club
// 18-60 - adult club
// above 60 - old people club

const userAge = 59;
if (userAge > 60) {
  console.log("Old Peoples club");
} else if (userAge < 18) {
  console.log("Young Club");
} else {
  console.log("Adults Club");
}

// if(email && password){
//     if(email is registered){
//         if(password is correct){
//             // login
//         }else{
//             console.log('Incorrect pass');

//         }

//     }else{
//         console.log('please register');

//     }

// }else{
//     console.log('provide your email and password');

// }

const grade = "g";
switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("fair");
    break;
  case "E":
  case "e":
    console.log("pass");
    break;
  case "F":
  case "f":
    console.log("OLODO RABATA");
    break;
  default:
    console.log("Invalid Grade, Try Again");
}
