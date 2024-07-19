// // // // // // console.warn(!"anil");// false
// // // // // // console.warn(typeof ("anil"));//string

// // // // // let data = "size"
// // // // // const bird = {
// // // // //     size:"small"
// // // // // }

// // // // // console.warn(bird[data]);
// // // // // console.warn(bird['size']);
// // // // // console.warn(bird.size);//"small"
// // // // // console.warn(bird.data);

// // // // // out
// // // // // // =======
// // // // // small
// // // // // small
// // // // // small
// // // // // undefined

// // // // let c = {
// // // //   name: "peter",
// // // // };

// // // // let d;

// // // // d = c;
// // // // c.name = "anil"
// // // // console.log(d.name);//out---anil

// // // // var x;
// // // // var x = 10;
// // // // console.log(x);//out-10

// // // var x;
// // // let x = 10
// // // console.log(x);//shows error-Identifier 'x' has already been declared

// // let a = 3;
// // let b = new Number(3)//--object

// // console.log(a == b);//true
// // console.log(a===b);//false--because b is an object

// let name;
// nmae = {}
// console.log(name);//undefined


function fruit() {
    console.log('woof');
}

fruit.name = 'apple'
fruit()