let n = 5
let str =''

for (let i = 0; i < n; i++){
    for (let j = 1; j <= n-i; j++){
        str+='*'
    }

    str+='\n'
}

console.log(str);

