// write a code thats a question using the prompt method
//the question should say "Who is there?"
//if the question reply is "Dami", it should prompt for a password
//if the qestion reply is not "Dami", alert "I dont know you"
//if the password is "javascript", then alert "welcome user"
//if the password is not "javascript", alert "wrong password"
//if there is no question, alert "cancelled"

const askQuestion = () => {
  let user = prompt("Who is there?");
  if (user == null) {
    alert("Cancelled");
  } else if (user == "Dami") {
    let password = prompt("Enter password:");

    if (password == null) {
      alert("Cancelled");
    } else if (password == "javascript") {
      alert("Welcome user");
    } else {
      alert("Wrong password");
    }
  } else {
    alert("I don't know you");
  }
};
askQuestion();
