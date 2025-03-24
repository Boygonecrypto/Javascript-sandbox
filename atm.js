// write a simple atm js algorithm
// checkBalance
// withdrawAmount
// depositAmount
// checkPin
let balance = 5000;
let pin = 1234;
let attempts = 3;
// checkPin
function checkPin(enteredPin) {
  while (attempts > 0) {
    if (enteredPin == pin) {
      attempts = 3;
      return `Start ATM`;
    } else {
      attempts--;
      return `Incorrect Pin ${attempts} attempts left`;
    }
  }

  return "Your card has been blocked";
}
console.log(checkPin(1234));

function startATM(choice) {
  if (choice === 1) {
    // withdrawal
    withdrawAmount(2000);
  } else if (choice == 2) {
    // deposit
    depositAmount(7000);
  } else if (choice == 3) {
    // check balance
    checkBalance();
  } else if (choice == 4) {
    // exit
    return "Thank you for banking with us";
  } else {
    // invalid option
    return "Invalid option, Try again";
  }
}
// function to checkBlalance
function checkBalance() {
  return `Your current balance is $${balance}`;
}

// withdrawAmount

function withdrawAmount(amount) {
  if (amount < balance) {
    balance -= amount;
    return `Withdrawal successful`;
  } else {
    return `Insufficient funds`;
  }
}

function depositAmount(amount) {
  balance += amount;
  return "You have deposited " + amount;
}
