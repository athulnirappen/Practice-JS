//filter --return a new array based on the condition


const array = [1, 2, 3, 4, 5, 6, 78, 9, 10]

let evenNumber = array.filter((value) => value % 2 === 0)
let oddNumber = array.filter((num) => num % 2 !== 0)
console.log(oddNumber);
console.log(evenNumber);