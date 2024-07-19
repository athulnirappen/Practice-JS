function CountVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  // for (const char of str) {
  //     if (vowels.includes(char)) {
  //         count ++
  //     }

  // }
  //  return count;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(CountVowels("MYnamEisunoUs"));
