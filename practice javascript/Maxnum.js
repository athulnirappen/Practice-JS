//Write a JavaScript program to find the maximum number in an array.

let array=[12,45,67,89,100]

function MaxNumberArray(arr) {
    let max = arr[0]
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max=arr[i]
        }
            
        
    }

    return max
    
}


console.log(MaxNumberArray(array));