// let num = [1, 2, 3, 4, 5];

// function Example(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (i === 3) return array[i];
//   }
// }

// function Example(array) {
//   return array[3];
// }

// console.time("Example");
// console.log(Example(num));
// console.timeEnd("Example");


// function printBoth(n) {

//   //on^2

//   for (let i = 0; i < n; i++){
//     for (let j = 0; j < n; j++){
//       console.log(i,j);
//     }
//   }
  
// }

// printBoth(3)


//space complexity

let array=[23,567,890]

function SumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum+=array[i]
    
  }
  return sum
  
}


console.log(SumArray(array));
