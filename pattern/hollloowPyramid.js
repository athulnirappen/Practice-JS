let n = 10;
let str = ''



for (i = 1; i <= n; i++){
    for (j = 1; j <= n - i; j++){
        str+=' '
    }

    for (k = 0; k < 2 * i - 1; k++){
        if (i === 1 || i === n) {
            str+=String.fromCharCode(k+65)
        } else {
            if (k === 0 || k === 2 * i - 2) {
                str += String.fromCharCode(k + 65);
            } else {
              str += " ";  
            }
        }
        
        // str+='#'
    }

    str+='\n'
}


console.log(str);



