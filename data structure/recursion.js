// function Lunch(n) {
   
//     if (n == 5) {
//         return true
//     }
//   console.log(n);
//   return Lunch(n+1)
// }

// console.log(Lunch(1));

// function multiply(arr) {
//     let product = 1
//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
        
//     }

//     return product
    
// }
// console.log(multiply([1,2,3,4,5]));

//let convert these to recursive function

// function Multiplyrecursive(array) {

//     if(array.length<=0) return 1

//     return array[array.length-1]*Multiplyrecursive(array.slice(0,array.length-1))
    
// }

// console.log(Multiplyrecursive([1,2,3,4,5]));

// function factorial(n) {
//     if (n <= 1) return 1
//     return n*factorial(n-1)
    
// }

// console.log(factorial(6));

function RangeofNumber(start, end) {
    
    if (end < start) return []
    let numbers = RangeofNumber(start, end - 1)
    numbers.push(end)
    return numbers
    

}

console.log(RangeofNumber(1,5));