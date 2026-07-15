let button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  //   alert("The button is been clicked")
  document.querySelector(".text").innerHTML =
    "<h4>The button has been clicked! <br> Click the button again to get back Hello World</h4>";
  setTimeout(() => {
    document.querySelector(".text").innerHTML =
    "<h4>Hello Wordd</h4>"
  }, 5000);
});
