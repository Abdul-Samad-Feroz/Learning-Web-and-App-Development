let login = document.querySelector(".login");
let signup = document.querySelector(".signup");
let signupBtn = document.querySelector("#show-signup");
let loginBtn = document.querySelector("#show-login");

signupBtn.addEventListener("click", function () {
  login.style.visibility = "hidden";
  signup.style.visibility = "visible";
});

loginBtn.addEventListener("click", function () {
  signup.style.visibility = "hidden";
  login.style.visibility = "visible";
});
