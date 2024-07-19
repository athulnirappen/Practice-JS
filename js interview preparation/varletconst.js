//scope


// var y=97

// {
//     let a = 90
//     var k = 8
//     const p = 9
//     console.log( 'y inside block',y);
    
// }

// console.log(a);
// console.log(k);
// console.log(p);
// console.log(y);


//var has global scope bt let and const have block and functional scope


//variable shadowing

// function Test() {
//   let a = 3;
//     var b = 4;
//     const h=8

//   if (true) {
//     let a = 8;
//       let b = 90;
//       const h=98

//     console.log(a);
//       console.log(b);
//       console.log(h);
//   }
// }

// Test();

//here varibles are shadowing in the if scope
//if we shadow let variables with var variable its not possible and known illegal shadowing

// hoisting

//everythng in js happend in execution context--2 part
//1.memory and 2.code section

// in memmory phase---it shows all the variable and functions as key value pairs--here the variables are allocated as undefined and functions are allocted as their body eg--function name:{....}


//code execution phase --all the code are executed in these phase
//javascript is synchronous single threaded application






