// find the sum of all elements in an array

let array=[1,2,3,4,5]

function SumOfarray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
         sum += array[i];
        
    }

    return sum
}

console.log(SumOfarray(array));