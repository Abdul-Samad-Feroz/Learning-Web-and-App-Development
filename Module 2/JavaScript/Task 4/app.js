var count = 0;

function increment() {
  ++count;
  document.getElementById("counter").innerText = count;
}
function decrement() {
  if (count > 0) {
    --count;
    document.getElementById("counter").innerText = count;
  } else {
    alert("Negative Value!");
  }
}
function reset() {
  count = 0;
  document.getElementById("counter").innerText = count;
}

counter.style.transform = "scale(1.2)";
setTimeout(() => {
  counter.style.transform = "scale(1)";
}, 100);
