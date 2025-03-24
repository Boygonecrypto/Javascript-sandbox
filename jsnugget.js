try {
  console.log(age);
  // do sth
} catch (error) {
  // handle the error
  // error message
  console.log(error.message);
}
const person = {
  name: "bob",
  age: 76,
};
if (person.age) {
  console.log("hello");
}
console.log(person?.job);
console.log(person.job);
let error = {
  firstName: "First Name is required",
};
error?.firstName?.message;

// nullish coalescence
//
const image = null;
const whatsappAvatar = image ?? "Avatar Image";
console.log(whatsappAvatar);
