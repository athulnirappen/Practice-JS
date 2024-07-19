
// const person = {
//     name: "varun",
//     age: 34,
//     job: "developer",
    
//     details: function () {
//         console.log(this);
//     }
// }

// console.log(person.details());
// //object literals

// const user = {
//     username: "athul",
//     loginCount: 10,
//     signOut: true,
    
//     getUserDetails: function () {
//         //   console.log(`Username:${this.username}`);
//         console.log(this.username);//here this is refered to the object that is being executed
//     }
// }

// console.log('outr',this);


// console.log(user.username);
// console.log(user.getUserDetails());

// class
class Person{
    constructor(name, email,status) {
        this.name = name;
        this.email = email;
        this.status = status
        this.score=0

    }

    Login() {
        console.log(`${this.name} is logged and status is ${this.status}`);
        return this //for chaining
    }

     LogOut() {
         console.log(`my name is ${this.name} and email is ${this.email}`); 
         return this // for chaining
    }

    updateScore() {
        this.score++
        console.log(`${this.email} score is now ${this.score}`);
        return this // for chaining
    }
}

const user1 = new Person('athul', 'athul@gmail.com', 'active')//the new keyword is used to create a empty object. and set the values of this to new empty object
const user2 = new Person("amal", "amal@gmail.com", "inactive");

// method chaining
// user1.Login().updateScore().updateScore().updateScore().LogOut()

// user2.Login()


// inheritance

class Persondetails extends Person{
    constructor(name,age,role) {
        super(name, age)
        this.role=role
        
    }

    Myjob() {
        console.log(`${this.name}'s job is ${this.role}`);
    }
}

let mydetails = new Persondetails('athul', 89, 'fullstack developer')
mydetails.Myjob()
mydetails.LogOut()

//polymorphism

