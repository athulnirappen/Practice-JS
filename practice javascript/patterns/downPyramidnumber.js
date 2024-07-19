
 let str = "";
for (let i = 9; i >=0; i-=3){
   
    
    for (let j =0; j <=i; j+=3){
        str+=j
    }

    str+='\n'
}

console.log(str);

//out

// 0369;
// 036;
// 03;
// 0; 

