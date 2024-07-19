//Write a JavaScript program to calculate the factorial of a given number


function Factorial(n) {

    if (n === 0 || n === 1) {
        return 1
    }

    let fact = 1
    
    for (let i = 1; i <= n; i++){
        fact*=i
    }


    return fact
    
}

console.log(Factorial(5));