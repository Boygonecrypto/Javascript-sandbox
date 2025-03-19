const customers = ["Ade", "Ngozi"];

customers.map((customer) => {
  console.log(customer.charAt(0));
});

//[object1, object2]
//name, age, gender, location, phoneNumber

const myCustomers = [
  {
    name: "Kung Lao",
    age: 25,
    gender: "M",
    location: "Ibadan",
    purchase: 6000,
  },
  {
    name: "Johnny Cage",
    age: 30,
    gender: "M",
    location: "Lagos",
    purchase: 8000,
  },
  {
    name: "Liu Kang",
    age: 22,
    gender: "M",
    location: "Ibadan",
    purchase: 4300,
  },
  {
    name: "Sonya Blade",
    age: 20,
    gender: "F",
    location: "Lagos",
    purchase: 7400,
  },
  { name: "Kitana", age: 32, gender: "F", location: "Ondo", purchase: 6200 },
];

myCustomers[1].name;
const { name } = myCustomers[1];
myCustomers[1]["name"];

myCustomers.map((customer) => {
  console.log(customer.name);
});
// get customers that are 25 and above
const oldCustomers = myCustomers.filter((customer) => customer.age >= 25);
console.log(oldCustomers);
// get customers that are below 25
const youngerCustomers = myCustomers.filter((customer) => customer.age < 25);
console.log(youngerCustomers);

const maleCustomers = myCustomers.filter(
  (customer) => customer.gender.toUpperCase() == "m".toUpperCase()
);
console.log(maleCustomers);
const femaleCustomers = myCustomers.filter(
  (customer) => customer.gender == "F"
);
console.log(femaleCustomers);

// get the number of customers staying in lagos
const lagosCustomers = myCustomers.filter(
  (customer) => customer.location == "Lagos"
);
const lagosCustomersLength = lagosCustomers.length;
console.log(lagosCustomersLength);

// arrange the customers according to age

const customerAge = myCustomers.sort((a, b) => a.age - b.age);
console.log(customerAge);
// get the average age of the customers
const totalAge = myCustomers.reduce((acc, customer) => acc + customer.age, 0);
const avgAge = totalAge / myCustomers.length;
console.log(avgAge);

let amalaEatingCity = myCustomers.find((c) => c.location == "Ibadan");
console.log(amalaEatingCity);
// get anew array containing all the purchases of all customers

const customersPurchase = myCustomers.map((c) => c.purchase);
console.log(customersPurchase);

// get the total purchase amount of all customers

const minimumPurchase = myCustomers.filter((c) => c.purchase >= 6000);
console.log(minimumPurchase);

// get a total purcahse of all customers

const totalPurchase = myCustomers.reduce((acc, c) => acc + c.purchase, 0);
console.log(totalPurchase);

// get the average purchase of the last 3 customers

const avgLastThreeCustomers = myCustomers
  .slice(2)
  .reduce((acc, c) => acc + c.purchase, 0);
const avg = avgLastThreeCustomers / 3;
console.log(avg);

// get the total purchase amount for all customer in ibadan
const ibadanTotalPurchase = myCustomers
  .filter((c) => c.location == "Ibadan")
  .reduce((acc, c) => c.purchase, 0);
console.log(ibadanTotalPurchase);

const shoppingCart = [
  { title: "Jean", price: 100, qty: 2 },
  { title: "Hat", price: 50, qty: 4 },
  { title: "Cream", price: 30, qty: 1 },
  { title: "Duffel Bag", price: 150, qty: 5 },
  { title: "Balaclava", price: 70, qty: 3 },
];
// jean costs $100
shoppingCart.map((item) => {
  console.log(`${item.title} costs $${item.price}`);
});

const itemsInShoppingCart = shoppingCart.filter((item) => item.price > 70);
console.log(itemsInShoppingCart);

shoppingCart.map((item) => {
  console.log(`${item.title}s will cost $${item.price * item.qty}`);
});

const totalCostInShoppingCart = shoppingCart.reduce((acc, item)=> acc + (item.price * item.qty), 0)
console.log(`Total cost is $${totalCostInShoppingCart}`);
