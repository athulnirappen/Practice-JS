

// ? Abcdefg - print only 'g'
// function Print(str) {

//     // str = str.toLowerCase()
//     for (let char of str) {
//         if (char == "g") {
//             return char
//         }
//     }

// }

// console.log(Print("hugfdr"));


// ? Print 'c and d' Interchange C and D.
let str = "Abcdefg"
let newstr = str.replace('c', 'C').replace('d','D')
console.log(newstr);










//? Replace the repeating digits and print the rest.
// function RepeatingChar(str) {
//   let count = {};
//   let countCheck = [];

//   for (let char of str.toLowerCase()) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char in count) {
//     if (count[char] === 1) {
//       countCheck.push(char);
//     }
//   }

//   return countCheck;
// }

// const result = RepeatingChar("programming");
// console.log(result);





// add element to first of an array
const name = ["a", "t", "h", "u", "l","a"]
const newname = name.unshift('d')
console.log(name);




//reverse  a string

function ReverseString(str) {

  let  newStr = str.split('').reverse()
    return newStr
    
}

const result = ReverseString('hello')
console.log(result);


