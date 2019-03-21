//конструкторы и классы
//ES5
// function User(name, id) {
//     this.name = name;
//     this.id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello ' + this.name);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log('Polzovalet ' + this.name + ' uhol');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

//     console.log(ivan);
//     console.log(alex);
//     ivan.exit();

/// ES6
class User {
    constructor(name, id) {
        this.name = name;
        this.id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`)
    }
    exit() {
        console.log(`Polzovatel ${this.name} uhol`)
    }
}

let ivan = new User('Ivan', 25);
let  alex = new User('Alex', 20);

    console.log(ivan);
    console.log(alex);
    ivan.exit();