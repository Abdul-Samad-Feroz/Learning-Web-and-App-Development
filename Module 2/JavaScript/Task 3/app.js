for (var i = 5; i >= 0; i--) {
  for (j = 0; j < i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (var i = 1; i <= 5; i++) {
  for (j = 0; j < i; j++) {
    document.write(i);
  }
  document.write("<br>");
}

for (var i = 1; i <= 5; i++) {
  for (j = 1; j <= 5 - i; j++) {
    document.write("&nbsp;&nbsp;");
  }
  for (k = 1; k <= i; k++) {
    document.write(k + " ");
  }
  document.write("<br>");
}

for (var i = 1; i <= 5; i++) {
  for (j = 1; j <= 5 - i; j++) {}
  for (k = 1; k <= i; k++) {
    document.write(String.fromCharCode(64 + k) + " ");
  }
  document.write("<br>");
}

for (var i = 1; i <= 5; i++) {
  for (var s = 1; s <= 5 - i; s++) {
    document.write("&nbsp;&nbsp;");
  }

  for (j = 0; j < i * 2 - 1; j++) {
    document.write("*");
  }

  document.write("<br>");
}

document.write("<br>");

for (var i = 5; i >= 1; i--) {
  for (var s = 1; s <= 5 - i; s++) {
    document.write("&nbsp;&nbsp;");
  }

  for (j = 0; j < i * 2 - 1; j++) {
    document.write("*");
  }

  document.write("<br>");
}

var size = 5;

for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
    if (i === 1 || i === size || j === size - i + 1) {
      document.write("*");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }

  document.write("<br>");
}
