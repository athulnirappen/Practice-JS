//Write a JavaScript program that displays the largest integer among two integers



function Largestnum(num1, num2) {
    if (num1 > num2) {
        return `largest number is ${num1}`
    } else if(num2>num1){
        return `largest number is ${num2}`
    } else {
        return `both are equal`
    }
}

let result = Largestnum(90, 90)
console.log(result);