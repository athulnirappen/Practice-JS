// palindrome number

// function Palindrome(x) {
//   return x == +x.toString().split("").reverse().join("")
// }

// console.log(Palindrome(12));

//palindrome words

// function Paliword(word) {
//     return word==word.toString().split('').reverse().join('')

// }

// console.log(Paliword("nan"));

function pali(x) {
   return x > 0 ? x == x.toString().split("").reverse().join("") : "not palindrome";

  // return x==x.toString().split('').reverse().join('')
}

console.log(pali(11));
