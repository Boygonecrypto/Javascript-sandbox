// OBJECT - {key: value, key2: value2}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  isMarried: "True",
  friends: ["Jane", "Peter", "Mark"],
  job: "Teacher",
  location: {
    street: "Vineyard",
    area: "Lekki",
    city: "Lagos",
    zip: 100111,
    geoLocation: {
      lat: 23.46,
      lng: 45.78,
    },
  },
};
// getting properties from an object
// dot notation objName.propertyName and bracket notation objname ['propertyName]
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName.toUpperCase());
console.log(person["age"]);
console.log(person["friends"]);
console.log(
  `I live at ${person.location.street} estate, ${person.location.area} ${person.location.city}`
);

// adding a new property to an object
// workPlace
person.workPlace = "Appolo Schools";
console.log(person);

// add a new property to location object in the person object called landmark and set it to city mall
person.location.landmark = "City Mall";
console.log(person);

// removing property delete
delete person.job;
console.log(person);

const user = {
  username: "ade001",
  email: "ade@google.com",
  profilePic: "image",
  isLoggedIn: true,
  isVerified: true,
  posts: ["Nigeria just get as e be", "I love Foods"],
  welcomeUser: function () {
    return this.isLoggedIn ? `Welcome ${this.username}` : "Log in to continue";
  },
  verifyUser: function () {
    return this.isVerified
      ? "Verification Succesful"
      : "Verify your account to continues";
  },
};

// object methods - developer writes the function
// function declaration(this-refers to the object itself)
// writing a function that tells user welcome 'username' or login to continue
console.log(user.welcomeUser());

// write an object method verifyUser
// if user is verified return Verification succesful else verify your account to continue

console.log(user.verifyUser());

const book = {
  title: "Bartimaeus: Amulet of samarkand",
  author: "Jonathan Stroud",
  yearPublished: 2003,
  rating: 5,
  similarAuthors: ["Garth Nix", "Philip Pullman", "Dianna Wyne Jones"],
  price: 580,
  genre: "Fantasy",
  description: function () {
    return `This book titled ${this.title} by ${this.author} which costs $${this.price} and it is a ${this.genre} novel `;
  },
  recommendBook: function () {
    return this.rating > 3.5 ? "This book is recommended" : "Not recommended";
  },
};
console.log(book.description());
console.log(book.recommendBook());
// Object.keys, Object.values, Object.entries
const transaction = {
  amount: 4000,
  date: "16th, March 2025",
  charges: 25,
  refNum: "tranx-8763443834643",
};
console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

const match = {
  teamA: "Bayern Munich",
  teamB: "Manchester City",
  teamAScore: 4,
  teamBScore: 2,
  duration: 96,
  corners: 12,
  numOfSubsUsed: 7,
  fouls: 14,
  stadium: "Wembley",
  weather: "Snowy",
  matchWinner: function () {
    if (this.teamAScore > this.teamBScore) {
      return `${this.teamA} won with a score of ${this.teamAScore}`;
    } else if (this.teamBScore > this.teamAScore) {
      return `${this.teamB} won with a score of ${this.teamBScore}`;
    } else {
      return "It is a draw";
    }
  },
  matchOverview: function () {
    return `The match between ${this.teamA} and ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`;
  },
};

const { teamA, fouls, stadium, corners } = match;
console.log(fouls, stadium, corners);

console.log(match.matchWinner());
console.log(match.matchOverview());
// object destructuring - we are getting properties from an object

const property = {
  name: "Exquisite Villa",
  rent: "2.3M/Year",
  bedrooms: 7,
  bathroom: 10,
  cautionFee: 5000,
  legalFee: 4000,
  facilities: ["pool", "sauna", "theatre", "gym"],
  location: {
    area: "Gbagada",
    city: "Lagos",
    num: "45",
    street: "Charlie Boy",
    geo: {
      lat: 100.27,
      lng: 45.78,
    },
  },
};
const {
  name,
  rent,
  location: {
    street,
    city,
    geo: { lng },
  },
} = property;

const product = {
  price: 9.99,
  discount: 7.17,
};
const { price, discount } = product;
let newPrice = price - (discount / 100) * price;
console.log(newPrice.toFixed(2));

