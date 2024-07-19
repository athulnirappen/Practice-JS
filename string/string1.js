const str="My name is  My Athul Thomas"


// console.log(str.length);
// console.log(str[1]);

// //looping

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element);
// }

                                                    //modifying strings
// str[3] = "M"
// console.log("str", str);

//cannot modify string using these technique && we can use other methods
// 1.replace
// ================

// console.log(str.replace("My", "our"));//replace first instance of the word here it change first My
// console.log(str.replaceAll("My", "our"));//replace all instance of the word here it change all My


//2.concat
//==================

//To join 2 string
// console.log(str.concat(" " + "and i am from kerala"));

//3.trim()----remove spaces in the string

// const str1="      hello   world  "
// console.log(str1);
// const newstr1 = str1.trim()
// console.log(newstr1);

                               //searching
                        // ==================
                                
// console.log(str.indexOf('A'));
// console.log(str.indexOf("name"));
// console.log(str.lastIndexOf('a'));

//startswith && endswith


// console.log(str.startsWith('M'));
// console.log(str.endsWith('s'));

// // extracting substrings

// console.log(str.indexOf("Athul"));
// console.log(str.substring(15, 20));
// console.log(str.slice(-15));


                                                        //string conversion
                                         //convert string to lowercase and uppercase
 
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//  Converting Case

// let tobeConverted = { name: 'arun' }
// console.log(String(tobeConverted));//[objet object]

// console.log(JSON.stringify(tobeConverted));

// console.log('A' === 'a');
// console.log(str.charCodeAt(0));
// console.log(String.fromCharCode(65));

//string comparison

// const str1 = "apple"
// const str2 = "apple"

// console.log(str1.localeCompare(str2));

// //includes

// console.log(str.includes('Athul'));

//splitting and joining strings

// console.log(str.split(' '));
const arr = ["apple", "banana"]
console.log(arr.join(" and "));
