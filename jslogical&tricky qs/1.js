function Fruit() {
//  name = "banana";
    console.log(name);//undefined
    console.log(price);//shows error ---due to use of let--Not hoisting here

    var name= "apple"
   
    let price=90
}


Fruit()