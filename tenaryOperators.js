// tenary operators
// if else
// condition? first action  : second action
const myNumber = -50;
myNumber > 0 ? console.log("POSITIVE") : console.log("NEGATIVE");

const myNum = 13;
myNum % 2 == 0 ? console.log("EVEN") : console.log("ODD");

// Mr Mario has a car
// Mr Mario does not have a car
const hasACar = false;
const sentence = `Mr Mario ${hasACar ? "has" : "does not have"} a car`;
console.log(sentence);

const isUserLoggedIn = false;
isUserLoggedIn ? console.log("Welcome User") : console.log("Log Out");

let balance = 5000;
let loanAmount = 1000;
loanAmount <= balance * 2
  ? console.log("Eligible")
  : console.log("Not Eligible");

let savings = 2000000;
let transactionAmount = 5000000;
savings > transactionAmount
  ? console.log("Succesful")
  : console.log("Insufficient Funds");
transactionAmount > 0
  ? console.log(`Credit alert of ${transactionAmount}`)
  : console.log(`Debit alert of ${transactionAmount}`);
