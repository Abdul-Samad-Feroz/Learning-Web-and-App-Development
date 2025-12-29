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
