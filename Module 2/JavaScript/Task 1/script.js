let input = prompt("Enter a Number");

input = Number(input);

if (input > 0) {
  document.write("The number is Positive");
} else if (input < 0) {
  document.write("The Number is Negative");
} else if (input == 0) {
  document.write("The Number is zero");
} else {
  document.write("Enter a valid Number");
}

var age = prompt("Enter your Age");
age = Number(age);
if (age >= 18) {
  document.write("<br>You can Vote");
} else {
  document.write("<br>You cannot Vote");
}

var password1 = prompt("Enter Password 1");
var password2 = prompt("Enter Password 2");

if (password1 == password2) {
  document.write("<br>Correct<br>");
} else {
  document.write("Incorrect<br>");
}

var marks = prompt("Enter Your Marks");
marks = Number(marks);
if (marks > 80) {
  alert("A Grade");
}

var temprature = prompt("Enter Temprature");

if (temprature > 35) {
  document.write("Garmi zyada hai");
}

var username = prompt("Enter Name");

if (username == "Ahmed") {
  alert("Welcome");
}
