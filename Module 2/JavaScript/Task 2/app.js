let userInput = prompt("Enter your Age");
userInput = Number(userInput);
if (userInput < 0) {
  console.log("Invalid Input");
} else if (userInput <= 12) {
  console.log("Child");
} else if (userInput <= 19) {
  console.log("Teenager");
} else if (userInput <= 59) {
  console.log("Adult");
} else if (userInput >= 60) {
  console.log("Senior Citizen");
} else {
  console.log("Invalid Input");
}

var numberInput = prompt("Enter a Number");
if (numberInput === null) {
  console.log("Error: No input provided");
} else if (isNaN(numberInput)) {
  console.log("Error: Please enter a valid number");
} else {
  let number = Number(numberInput);
  if (number % 2 === 0) console.log(`${number} is Even`);
  else {
    console.log(`${number} is Odd`);
  }
}
