//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).


function Uppercase(words) {
    return words
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
}

console.log(Uppercase("hello world, welcome to the universe"));