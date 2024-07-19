//find --Returns the value of the first element in the array that satisfies the provided testing function


const array = [30, 40, 50, 70]
let res = array.find((num) => num < 33)

console.log(res);