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
