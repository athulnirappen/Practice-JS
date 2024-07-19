//anagram word

//eg---anagram and nagaram contain same alphabet

// function Anagram(x, y) {
//     x = x.split('').sort().join('')
//     y = y.split("").sort().join("");

//     return x == y;

// }

// console.log(Anagram("anagram", "anagram"));

//without using in-built functions

function checkAnagram(str1, str2) {
  function CharCount(str) {
    count = {};

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (!count[char]) {
        count[char] = 1;
      } else {
        count[char]++;
      }
    }

    return count;
  }

  let string1 = CharCount(str1);
  let string2 = CharCount(str2);

    for (let char in string1) {
        if (string1[char] !== string2[char]) {
          return false
      }
    }
    
     for (let char in string2) {
       if (string2[char] !== string1[char]) {
         return false;
       }
    }
    
    return true
}


console.log(checkAnagram('ear','are'));