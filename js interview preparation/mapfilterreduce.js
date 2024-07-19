// map, filter, reduce

//map ---create new array from existing array

// const nums = [1, 2, 3, 4]

// const multibythree = nums.map((num, i) => { return num * 3 })
// console.log(multibythree);

//filter --- push the elements based on the condition
//take each element in an array and applies a condition if the condition is true it push the elements or it's does not push the element in tha array

//print more than 2 element in nums array

// const moreThanTwo = nums.filter((num) => { return num > 2 })
// console.log(moreThanTwo);

//reduce --- reduce the array into a value

// const sumOfArray = nums.reduce((acc, item) => {
//     return acc+item
// },0)

// console.log(sumOfArray);

// diffrence b/w map and foreach

// let array = [2, 4, 6, 7, 8]

// let MAP = array.map((item, i) => {
//     return item + 5
// })

// console.log('map', MAP);

//foreach

// let FOREACH = array.forEach((item,i) => {
//     array[i] = item + 3;
// })

// console.log('foreach', array);

// in map it return a array bt in foreach it modify the original array

let students = [
  {
    name: "athul",
    rollnumber: 32,
    mark: 40,
  },
  {
    name: "arun",
    rollnumber: 23,
    mark: 90,
  },
  {
    name: "ajil",
    rollnumber: 1,
    mark: 70,
  },
];

//return only name of students in capital

// const Name = students.map((item) => item.name.toUpperCase());

// console.log(Name);


// const morethan60mark = students.filter((item) => item.mark > 60)
// console.log('morethan60',morethan60mark);


//morethan 60 mark and rollnumber >15

// const details = students.filter((item) => item.mark > 60 && item.rollnumber > 15)
// console.log(details);


//print sum of marks of all students

// const sumOfmark = students.reduce((acc, item) => acc + item.mark, 0)
// console.log(sumOfmark);

///   return only names of students who scored more than 60

const result = students.filter((item) => item.mark > 60).map((val)=>val.name)
console.log(result);