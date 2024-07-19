// with in-built functions

let array = [1, 2, 34, 5, 67, 98];

// function RevrseArry(arr) {
//   arr.reverse();
//   return arr;
// }

// console.log(RevrseArry(array));


// without in-built functions

function Arryreverse(arr) {
    
    let start = 0
    let end = arr.length - 1
    
    while (start <= end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end]=temp
        
        start++
        end--
    }

    return arr
}

console.log(Arryreverse(array));
