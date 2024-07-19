//Question: Create a Person class with properties name and age. Include a method greet that prints "Hello, my name is [name] and I am [age] years old."


class Person{
    constructor(name, age) {
        this.name = name;
        this.age=age
        
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const john = new Person('John', 23)
// console.log(john);
john.greet()
