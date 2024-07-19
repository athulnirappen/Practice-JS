function Anagram(str1, str2) {
  function CheckAnagram(str) {
      let count = {};
      
      for (let i = 0; i < str.length; i++) {
          const char = str[i];
          if (!count[char]) {
              
              count[char]=1
            
          } else {
              
              count[char]++
          }
        
      }

      return count

    }
    let string1 = CheckAnagram(str1)
    let string2 = CheckAnagram(str2)
    
    for (const char in string1) {
        if (string1[char]!==string2[char]) {
           return false
            
        }
    }

     for (const char in string2) {
       if (string2[char] !== string1[char]) {
         return false;
       }
    }
    
    return true
}

console.log(Anagram("ear", "are"));
