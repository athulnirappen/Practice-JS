let word = "apple";

function ReverseString(string) {
  str = "";

  for (let i = string.length - 1; i > 0; i--) {
    str += string[i];
  }

  return str;
}

console.log(ReverseString(word));


//using in-built functions

function StringRevrse(str) {
    return str.split('').reverse().join('')
}

console.log(StringRevrse('myname'));
