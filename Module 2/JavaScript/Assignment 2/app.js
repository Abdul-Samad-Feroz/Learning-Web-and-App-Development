var num1 = prompt("Enter 1st Number");
var num2 = prompt("Enter 2st Number");
var total = Number(num1) + Number(num2);

document.write("Sum of " + num1 + " and " + num2 + " is " + total);

var num1 = prompt("Enter 1st Number");
var num2 = prompt("Enter 2st Number");
var total = Number(num1) - Number(num2);

document.write("<br>Subraction of " + num1 + " and " + num2 + " is " + total);

var num1 = prompt("Enter 1st Number");
var num2 = prompt("Enter 2st Number");
var total = Number(num1) * Number(num2);

document.write("<br>Multiplication of " + num1 + " and " + num2 + " is " + total);

var num1 = prompt("Enter 1st Number");
var num2 = prompt("Enter 2st Number");
var total = Number(num1) / Number(num2);

document.write("<br>Division of " + num1 + " and " + num2 + " is " + total);

var num1 = prompt("Enter 1st Number");
var num2 = prompt("Enter 2st Number");
var total = Number(num1) % Number(num2);

document.write("<br>Modulus of " + num1 + " and " + num2 + " is " + total);

var practice = 5;

document.write("<br><br>Value after variable declaration is: ??<br>");

document.write(`Initial value: ${practice}<br>`);

practice++;

document.write(`Value after increment is: ${practice}<br>`);

practice = 6 + 7;

document.write(`Value after addition is: ${practice}<br>`);

practice--;

document.write(`Value after decrement is: ${practice}<br>`);

practice = 12 % 3;

document.write(`The remainder is : ${practice}<br>`);

let price = (600)

let final = price * 5

document.write(`Total cost to buy 5 tickets to movie is ${final}PKR<br>`)

var tablenumber = 5;
var startingnumber = 1;
var endingnumber = 10;
document.write("Table of 5<br>");
for (var i = startingnumber; i <= endingnumber; i++) {
  document.write(`<p>${tablenumber}x${i} = ${tablenumber * i}</p>`);
}

var item1 = 650;
var item2 = 100;
var q1 = 3;
var q2 = 7;
var shippingcharges = 100;

document.write("<h1>Shopping Cart</h1>");
document.write(`<p>Price of item 1 is ${item1} </p>`);
document.write(`<p>Quantity of item 1 is ${q1}</p>`);
document.write(`<p>Price of item 2 is ${item2}</p>`);
document.write(`<p>Quantity of item 2 is ${q2}</p>`);
document.write(`<p>Shipping Charges ${shippingcharges}</p>`);

document.write(
  `<p>Total cost of your item is ${
    item1 * q1 + item2 * q2 + shippingcharges
  }</p>`
);

var totalmarks = 980;
var obtainnmarks = 804;

document.write("<h1>Marks Sheet</h1>");
document.write(`<p>Total marks: ${totalmarks} </p>`);
document.write(`<p>Marks Obtained: ${obtainnmarks}</p>`);
document.write(`<p>Percentage: ${(obtainnmarks / totalmarks) * 100}%</p>`);

var number = prompt("Enter a Number");
number = Number(number);

document.write("Result:<br>");

document.write(`The value of a is: ${number}<br>`);

document.write("...........................................<br>");

document.write(`The value of ++a is: ${++number}<br>`);

document.write(`Now the value of a is: ${number}<br>`);

document.write(`The value of a++ is: ${number++}<br>`);

document.write(`Now the value of a is: ${number}<br>`);

document.write(`The value of --a is: ${--number}<br>`);

document.write(`Now the value of a is: ${number}<br>`);

document.write(`The value of a-- is: ${number--}<br>`);

document.write(`Now the value of a is: ${number}<br>`);

var userName = prompt("Enter your Name");
alert(`Welcome ${userName}!`);

var tablenumber = prompt("Enter a Table Number");

if (tablenumber === "" || tablenumber === null) {
  tablenumber = 5;
}
for (var i = 1; i <= 10; i++) {
  document.write(`${tablenumber} * ${i} = ${tablenumber * i}<br>`);
}

var cityName = prompt("Enter City Name");

if (cityName == "Karachi") {
  console.log("Welcome to City of Lights");
}

var gender = prompt("Enter You Gender");
if (gender === "Male") {
  alert("Good Morning Sir");
} else if (gender === "Female") {
  alert("Good Morning Ma’am");
} else {
  alert("Enter Gender");
}

let signalColor = prompt("Enter Signal Color");

if (signalColor === "Green") {
  alert("Move now");
} else if (signalColor === "Red") {
  alert("Must Stop");
} else if (signalColor === "Yellow") {
  alert("Ready to move");
} else {
  alert("Enter Correct Color");
}

var char = prompt("Enter a character (number or letter)");
var ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  document.write("The input is a Number.");
} else if (ascii >= 65 && ascii <= 90) {
  document.write("The input is a Uppercase Letter.");
} else if (ascii >= 97 && ascii <= 122) {
  document.write("The input is Lowercase Letter.");
} else {
  document.write("The input is neither a number nor a letter.");
}

var num1 = prompt("Enter Number 1");
var num2 = prompt("Enter Number 2");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else if (num1 == num2) {
  console.log(num1);
  console.log(num2);
} else {
  console.log("Enter a valid Number");
}

