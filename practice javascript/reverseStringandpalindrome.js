// Write a JavaScript program to reverse a given string
//Write a JavaScript function to check if a given string is a palindrome


function ReverseString(str) {
    let newStr = ''
    
    for (let i = str.length-1; i >= 0; i--) {
        newStr+=str[i]
        
    }

   return newStr
}

console.log(ReverseString('athul'));



function checkPalindrome(str) {

    let newStr = ''
    for (let i = str.length-1; i >= 0; i--) {
        newStr+=str[i]
        
    }

    if (newStr === str) {
        return true
    }

    return false
    
}

console.log(checkPalindrome('car'));