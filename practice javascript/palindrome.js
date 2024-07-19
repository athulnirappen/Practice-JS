// Write a function to check if a given string is a palindrome.
function isPalindrome(str) {
    // Your code here
    //with inbuilt function

    // return str == str.split('').reverse().join('')

    //without inbuilt function
    let newStr = ''
    
    for (let i = str.length - 1; i >= 0; i--){
        newStr+=str[i]
    }

    if (str === newStr) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
