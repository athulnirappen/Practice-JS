// // *****
// // *   *
// // *   *
// // *   *
// // *****



let n = 5
let str=''


for (let row = 0; row < n; row++){
    
    for (let col = 0; col < n; col++){
        if (row === 0 || row === n - 1) {
            str+='*'
        } else {
            if (col === 0 || col === n - 1) {
               str += "*";
            } else {
                str+=' '
            }
        }
        
    }

    str+='\n'
}


console.log(str);


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for (let i = 0; i < n; i++) {
//   // external loop
//   for (let j = 0; j < n; j++) {
//     // internal loop
//     if (i === 0 || i === n - 1) {
//       string += "*";
//     } else {
//       if (j === 0 || j === n - 1) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);