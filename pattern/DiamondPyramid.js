let n = 5;
let str = "";

for (i = 0; i <= n; i++) {
  for (j = n; j > i; j--) {
    str += " ";
  }

  for (k = 0; k < 2 * i - 1; k++) {
      // str += "#";
       str += String.fromCharCode(k + 65);
  }

  str += "\n";
}

for (i = 0; i <= n - 1; i++) {
  for (j = 0; j < i; j++) {
    str += " ";
  }

  for (k = (n - i) * 2 - 1; k > 0; k--) {
     str += String.fromCharCode(k + 65);
  }

  str += "\n";
}

console.log(str);
