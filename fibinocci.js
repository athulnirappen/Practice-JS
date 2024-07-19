//0,1,1,2,3,5,8,13,21

function Fibi(n) {
  const array = [0, 1]

  for (let i = 2; i <= n; i++){

    array.push(array[i-2] +array[i-1])

  }
  return array;
}

console.log(Fibi(3));

//using recursion

const recursionFibi = function (n) {
  if (n <= 1) return n;

  return recursionFibi(n - 1) + recursionFibi(n - 2);
};

console.log(recursionFibi(3));
