//Question: Create a base class Animal with a property name and a method speak. Then create a subclass Dog that overrides the speak method to print "Woof! Woof!".

class Animal{
    constructor(name) {
        this.name=name
        
    }

    speak() {
        console.log(`${this.name} is speak`);
    }
}

class Dog extends Animal{
    speak() {
        console.log("Woof! Woof!");
    }
}


const dog = new Dog()
dog.speak()