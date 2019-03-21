'use strict'; //ES6

// console.log(leftBorderWidth)
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// let someting;
// console.log(someting);

// let persone = {
//     name: 'Jopa',
//     age: 55,
//     isMarried: false
// };

// console.log(persone["name"]);

// //masiv
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[0]);

// //alert('sraka');


//let answer = confirm('are wqw&');
//console.log(answer);

//let answer = +prompt('are wqw&', '23', '');
//console.log(typeof(answer));

//console.log('arr' + '- object');

// let incr = 10,
//     decr = 10;

//    // incr++;
//     //decr--;
//     console.log(incr++);
//     console.log(decr--);
//     console.log(5%2);
//     console.log("2" === 2);

//     let isChecked = true,
//         isClose = false;

//         console.log(isChecked && isClose);

// if (2*4 == 3) {
//     console.log("verno")
// } else {
//     console.log("ne verno")
// }


//USLOVYA
// let num = 50;

// if (num < 49) {
//     console.log('verno')
// } else if ( num > 100 ) {
//     console.log('ne verno')
// } else {
//     console.log('vernoooo')
// };

// switch (num) {
//     case num < 49:
//     console.log('ne verno');
//     break;
//     case num > 100:
//     console.log('mnouo');
//     break;
//     case 50:
//     console.log(' verno');
//     break;
// }



//CIKLY
// let num = 50
// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }


//FUNCTION

// let num = 20; //Глобальна переменая
// function showFirstMassage(text) {
//     alert(text);
//     let num = 10; //local peremenna
//     console.log(num);
// }

// showFirstMassage("hello world");
// console.log(num);

// function calc(a, b) { //function declaration
//     return (a * b);
// }

// let calc = function (a, b) { //function exprehion функ виражения
//     return (a * b);
// }
// alert( calc(5,5) ); 
// alert( calc(2,5) ); 

//ES6 standart
// let calc = (a, b) =>  a + b;  //function exprehion функ виражения

// console.log( calc(3, 4) );
// console.log( calc(1, 4) );

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);


// //Методы и сфойства у строк и чисел
// let str = "test";
// console.log(str.length); //length cвойство выводит длину строки

// console.log(str.toUpperCase());//Верхний регистр
// console.log(str.toLowerCase());

// // let twelve = "12.2";
// // console.log(Math.round(twelve));

// let twelve = "12.2px";
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));


//////////////callback-function

// function first() {
//     setTimeout( function() {
//         console.log(1);
//     }, 1000 );
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log("я учу " + lang);
//     callback();
// }

// learnJS("zalupu", function(){
//     console.log("ya prohol 3 urok")
// })


///////////////OBJECT

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"

// };

// console.log( options.name );

// options.bool = false;//dobavit object bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool; //delete object
// console.log(options);

// for (let key in options) { //перебираем обект оптионс 
//     console.log('Svoystvo ' + key + ' imeet znachenye ' + options[key]); // в key попадают свойства options[key] попадает в цыкл
// }

// console.log(Object.keys(options).length); //DLInna

///////////Масивы и псевдомасивы 

//--------------
//let arr = [1, 2, 3, 4, 5];

// arr.pop(); //удаления элемента с конца 
// arr.push("5"); // добавления элемента zapushyt element
// arr.shift(); //удаления 1-go элемента  
// arr.unshift("1"); // добавления элемента 1-go

// for (let i = 0; i < arr.length; i++) { // arr.length количество элементов в масиве
//     console.log(arr[i]);
// }
//----------------
// let arr = ["first", 2, 3, "Four", 5];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ':: ' + item + ' Masiv: ' + mass);
// });



// // arr.forEach(function(item)
// // {
// //     console.log(item);
// // });
// console.log(arr);

// let mass = [1, 2, 3, 0, 7];

// for ( let key of mass) { //for in получаем ключи масива с 0 //for of получаем значения
//     console.log(key);
// }

//*********************** */
// let ans = prompt("", ""),
// arr = [];
// arr = ans.split(',', 2);
// console.log(arr);

// let arr = ['aer', 'aaa', '333', '234e' ],
// i = arr.join(', ');//join склеивает все в одну строку с массива  +++ для сортировки sort
// console.log(i);

// let arr = [1, 3, 6, 2, 4],
//     i = arr.sort(compareNum);//  +++ для сортировки sort /// для сортировки чисел нужна колбек функция
// function compareNum(a, b) {
//     return a - b;
// }
// console.log(arr);

// let soldier = { 
//     health: 400,
//     armor:100
// };

// let john = { 
//     health:102
// };

// john
// console.log(john);
// console.log(john.armor);


///**********************DOM* */

