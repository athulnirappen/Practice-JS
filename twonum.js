//[2,7,11,15] target=9


function Target(arr,n) {
    
   

    for (let i = 0; i < arr.length; i++) {   
        for (j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === n) {
                console.log(arr[i],arr[j]);
            }
        }
   
    }

    
}

Target([2, 7, 11, 15],9);