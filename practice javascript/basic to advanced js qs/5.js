// a function to taka string and returns its reversed version

// function Reversestring(string) {
//   let str = "";

//   for (let i = string.length - 1; i >= 0; i--) {
//     str += string[i];
//   }

//   return str;
// }

// let value = Reversestring("Hello world");
// console.log(value);

//using inbuilt function


function Strrev(str) {
    return str.split('').reverse().join('')
}

console.log(Strrev("Hello world"));
