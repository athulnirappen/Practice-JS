// Write a function to reverse a given string.
function reverseString(str) {
  // Your code here
//without inbuilt function
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

      return newStr;
    
    // //with inbuilt function
    // return str.split('').reverse().join('')
}

console.log(reverseString("hello")); // Output: "olleh"
