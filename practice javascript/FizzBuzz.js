

// function PrintNum(n) {

//     for (let i = 1; i <= n; i++) {
        
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i%5===0) {
//             console.log('Buzz');
//         } else {
//           console.log(i);
//         }
        
        
//     }
    
// }

// PrintNum(100)

// Write a function that prints the numbers from 1 to 100.
// But for multiples of three, print "Fizz" instead of the number,
// and for the multiples of five, print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz".
function fizzBuzz() {
    // Your code here
    
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();