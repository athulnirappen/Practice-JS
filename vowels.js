function VowelCheck(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(VowelCheck("aeiou"));
