// sorting 3 number

let a = 10
let b = 200
let c = -50

if (a > b && a > c) {
    if (b > c) {
        console.log(`sortng order is ${a},${b},${c}`);
    } else {
        console.log(`sortng order is ${a},${c},${b}`);
        
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(`sorting order is ${b},${a},${c}`);
         
    } else {
        console.log(`sorting order is ${b},${c},${a}`);
        
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(`sorting order is ${c},${a},${b}`)
    } else {
        console.log(`sorting order is ${c},${b},${a}`);
        
    }
}