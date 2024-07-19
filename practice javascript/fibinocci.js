//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function Fibinocci(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  let sequence = [0, 1];

  for (let i = 2; i < num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log(Fibinocci(1));
