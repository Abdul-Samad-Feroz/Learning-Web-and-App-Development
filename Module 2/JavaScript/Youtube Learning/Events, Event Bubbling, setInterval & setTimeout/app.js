let button = document.getElementById("btn");

button.addEventListener("click", () => {
  //   alert("The button is been clicked")
  document.querySelector(".text").innerHTML =
    "<h4>The button has been clicked!</h4>";
});

button.addEventListener("dblclick", () => {
  document.querySelector(".text").innerHTML =
    "<h4>The button has been clicked!</h4>";
});

button.addEventListener("contextmenu", () => {
  alert("Dont Right Click Please!");
});

document.addEventListener("keydown", (e) => {
  console.log(e);
});

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child was clicked!");
});

document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child container was clicked!");
});

document.querySelector(".container").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Container was Clicked!");
});

function randomColor() {
  let val1 = Math.floor(Math.random() * 256);
  let val2 = Math.floor(Math.random() * 256);
  let val3 = Math.floor(Math.random() * 256);
  return `rgb(${val1}, ${val2}, ${val3})`;
}

setInterval(() => {
  document.querySelector(".container").style.backgroundColor = randomColor();
}, 3000);

setTimeout(() => {
  document.querySelector(".childContainer").style.backgroundColor =
    randomColor();
}, 5000);
