// #
// ##
// ###
// ####
// #####


// for (let row = 1; row <= 4; row++){
//     let str = ''
//     for (let col = 1; col <= row; col++){
//         str=str+row+''
//     }

//     console.log(str);
// }


// #
// ##
// ###
// ####
// #####

// for (row = 0; row < 5; row++) {
//   str = "";

//     for (col = 0; col<=row; col++) {
//     str = str + '#';
//   }

//   console.log(str);
// }


// #####
// ####
// ###
// ##
// #


// let n = 5
// let str = ''

// for (i = 0; i <= n; i++){

//     for (j = n; j >= i; j--){
//         str+='#'
//     }

//     str+='\n'
    
// }

// console.log(str);




    //     #
    //    ###
    //   #####
    //  #######
    // #########
    


let n = 5
let str = ''
    
for (i = 1; i <= n; i++){
    for (j = 0; j <= n - i; j++){
        str+=" "
        
    }

    for (k = 0; k < 2 * i - 1; k++){
        str+='#'
    }

    str+='\n'

}

console.log(str);