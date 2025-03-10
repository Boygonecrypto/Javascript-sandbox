// STRINGS - Character inside of quotation marks '' ""
const firstName = "John";
const lastName = "Doe";
// STRING PROPERTIES - length
console.log(firstName.length);
const myPassword = "@Marionmi2001";
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);
// string methods - built in functions that can be done on strings
const email = "jjdoe@google.co.uk";
console.log(email);
// toUppercase, toLowerCase
console.log(email.toUpperCase());
console.log(email.toLowerCase());
// indexOf, lastIndexOf, charAt
console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

// startWith true or false, endsWith, includes
console.log(email.startsWith("jj"));
console.log(email.endsWith(".com"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));

// trim, trimStart and trimEnd (removes white spaces)
const username = "     ade001     ";
console.log(username);
console.log(username.trim());
// replace replaceAll
// 01*******96
const myName = "jane doe";
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("e", "*"));
// extract portions of a string slice, substring, substr (starts from or end)
console.log(myName.slice(0, 4));
console.log(myName.substring(0, 3));
// substr(start, num of characters)
console.log(myName.substr(0, 2));
// feyugvewkgywvbjevbjweqyvuherkvwjekyvgshvgbhvjwhvbvgdsvd  read more....
const accountNumber = "1234567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "xxxxxx"));
// refactor the algo to use slice instead of substr
console.log(accountNumber.replace(accountNumber.slice(2, 8), "xxxxxx"));
const userName = "johnpaul";
console.log("welcome" + " " + userName.toUpperCase());
console.log(`welcome ${username.toUpperCase()}`);

//
const author = "Jax Draxx";
const book = "The Ghost";
// jax draxx wrote the book the ghost
const sentence = author + " wrote the book " + book.toLowerCase();
console.log(sentence);
// template literals used to format variables inside of a string
``;
const sentence2 = `${author} wrote the book ${book} `;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam";

const sentence3 = `${person.toUpperCase()} featured in the movie ${movie}`;
console.log(sentence3);

const fName = `${firstName} ${lastName}`;
const example = `ade said and i quote "i'm good"`;
console.log(example);
const country = "Thailand";
console.log(country.length);
console.log(country.toUpperCase());
console.log(country.slice(0, 5));
console.log(country.startsWith('e'));
console.log(country.includes('h'));
const sentence4 = `i live in ${country.toUpperCase()}`
console.log(sentence4);






