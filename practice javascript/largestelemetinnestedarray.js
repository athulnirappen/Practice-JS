//Write a JavaScript program to find the largest element in a nested array.



function findLargestElement(arr) {
    let largest = -Infinity;

    function traverse(subArray) {
        for (let element of subArray) {
            if (Array.isArray(element)) {
                traverse(element);
            } else if (element > largest) {
                largest = element;
            }
        }
    }

    traverse(arr);
    return largest;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], [6, 7, [8, 9, [10]]]];
console.log(findLargestElement(nestedArray)); // Output: 10
