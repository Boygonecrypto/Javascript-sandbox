// js MATH object
// sqrt, round, ceil, floor, pow, trunc, random
console.log(Math.sqrt(25));
console.log(Math.pow(10, 2));
console.log(10 ** 2);
console.log(Math.round(1.3));
console.log(Math.ceil(2.1));
console.log(Math.trunc(2.9));
console.log(Math.trunc(11.99));

// Math.random - random numbers between 0-1
// 0-10 0 8 6 10 9

console.log(Math.trunc(Math.random() * 11));
// 1-10
console.log(Math.floor(Math.random() * 10 + 1));
// raffle draw car
const customers = ["kelvin", "John", "Khalid", "David"];
const randomWinner = () => {
  let randomNumber = Math.floor(Math.random() * customers.length);
  return customers[randomNumber];
};
console.log(randomWinner());

// OTP generator
