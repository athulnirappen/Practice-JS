//every--Tests whether all elements in the array pass the test implemented by the provided function


let array = [34, 23, 14, 27]

let bellowthirty = (value) => value < 40
console.log(array.every(bellowthirty));