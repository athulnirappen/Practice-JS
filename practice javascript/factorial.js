// Write a function to calculate the factorial of a number.
function factorial(n) {
  // Your code here
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  }
}

console.log(factorial(5)); // Output: 120
