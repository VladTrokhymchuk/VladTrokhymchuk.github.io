// //конструкторы и классы
// //ES5
// // function User(name, id) {
// //     this.name = name;
// //     this.id;
// //     this.human = true;
// //     this.hello = function() {
// //         console.log('Hello ' + this.name);
// //     };
// // }

// // User.prototype.exit = function(name) {
// //     console.log('Polzovalet ' + this.name + ' uhol');
// // }

// // let ivan = new User('Ivan', 25),
// //     alex = new User('Alex', 20);

// //     console.log(ivan);
// //     console.log(alex);
// //     ivan.exit();

// /// ES6
// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`)
//     }
//     exit() {
//         console.log(`Polzovatel ${this.name} uhol`)
//     }
// }

// let ivan = new User('Ivan', 25);
// let  alex = new User('Alex', 20);

//     console.log(ivan);
//     console.log(alex);
//     ivan.exit();

// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(3, 4);
// showThis(9, 2);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() { 
//             console.log(this);
//         }
//         shout();
//     } 
// }
// obj.sum();

//-----------
// let user = {
//     name: "Jhon"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }
// console.log(sayName.call(user, 'Smith')); //у виде строки 'str'
// console.log(sayName.apply(user, ['Snow'])); // у виде масива []

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(6));
//-----------

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis()
});

//1 просто вызов функции получим window/undefined
//2 метод обекта - this = обект
//3 конструктор (new) - this = новый созданый обект
//4 указание конкретного контекста call, apply, bind