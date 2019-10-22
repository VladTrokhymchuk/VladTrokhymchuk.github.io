// var arr1 = [1,2,3];
// var arr2 = [4,5,6];

// var  arr3 = arr1.concat(arr2);
// console.log(arr3);

// // arr1.reverse();
// // console.log(arr1);

// arr1.push(4,5,6,);
// console.log(arr1);

// arr1.unshift(4,5,6);
// console.log(arr1);

// var mas1 = ['js', 'css', 'jq'];
// var mas2 = ['js', 'css', 'jq'];

// var mas3 = mas1;
// document.write(mas1.shift());
// document.write(mas1.pop());

// var arrslice1 = [1, 2, 3, 4, 5];
// var arrslice2 = [1, 2, 3, 4, 5];

//arrslice1.slice('-');

//console.log(arrslice1.slice(2) );
//arrslice2.splice(1,2);
//arrslice2.splice(0,0,2,3,4);
//arrslice2.splice(3,0,'a','b','c');

//console.log( arrslice2);
//document.write(arrslice1.splice(2,2));

// var sortmas = [3,4,1,2,7];

// sortmas.sort();

// console.log(sortmas);

// var obj = {
//     js:'test',
//     jq:'hello',
//     css:'world'
// };
// console.log(obj);
// // Object.keys(obj);
// console.log(Object.keys(obj));

//////////////1 2 3 4 5 length
//////////////0 1 2 3 4 index
////// dz senssey 
// var arrdz = [1,2,3,4,5];

// //arrdz.length;// z 1 dlina

// console.log(arrdz[arrdz.length - 1]);
// ////////

// arrdz.push('Компьютер');
// console.log(arrdz);
////
// var styles = ['Джаз',' Блюз'];
// styles.push('Рок-н-Ролл');//+
// styles.splice(1,1,'Классика');
// alert(styles.shift());
// styles.unshift('Rep', 'reggy');
// console.log(styles);



// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var min = 0, max = arr.length - 1;
// var rand = min + Math.floor(Math.random() * (max + 1 - min));
// console.log(arr[rand]);
// //alert(arr[rand]);

// var values = [];

// while(true)
// {
//     var str =  prompt('doday');
//     if (str == null || str == '') {
//         break;
//     }
//     values.push(str); 
// }
// //строка в число parseInt(), Number(), +values[i]
// var number = 0; 
// for(var i = 0; i < values.length; i++) {
//     number += parseInt(values[i]); 
// }

// console.log(number);

// arr = ["test", 2, 1.5, false];
// function find(arr, value) {
//     for(var i = 0; i < arr.length; i++ ) {
//         if(arr[i] === value) {
//             return i;
//         } 
//     }
//         return -1;

// }
// console.log(find(arr, 0) );


// var arr = [5, 4, 3, 8, 0];
// function filterRange(arr, a, b) {
//     var newarr = [];
//     for(var i = 0; i < arr.length; i++) {

//         if(arr[i] >= a && arr[i] <= b) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }

// var filtered = filterRange(arr, 3, 5);
// console.log(filtered);


// // РЕШЕТО ЭРАТОСФЕНА //** *********** **/
// //var str = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// var str = [];
// for (var n = 2; n <= 100; n++) {
//     str.push(n);
// }


// var p;
// console.log(str);
// function resheto(p) {

//     var newstr = [];
//     var newstr2 = str.indexOf(6);

//     for (var i = 0; i < str.length; i++) {
//         if (true) {
//             newstr.push(str[i] *= p);

//         }

//     }
//     return newstr;
// }
// //console.log(str);
// console.log(resheto(2));

/******************** */

// function fizzBuzz(num) {
//     for (var n = 1; n <= num; n++) {
//         if (n % 3 == 0 && n % 5 == 0) {
//             console.log('fizzBuzz');
//         } else if (n % 5 == 0) {
//             console.log('fizz');
//         } else if (n % 3 == 0) {
//             console.log('Buzz');
//         } else {
//             console.log(n)
//         }
//     }

// }

// fizzBuzz(20);

/***************** */


// var str = 'привет мир';

// str = str.split('');
// console.log(str);
// str[0] = str[0].toUpperCase();
// console.log(str);
// var result = str.join('');
// console.log(result);

// var str = 'hello';
// str = str[0].toUpperCase() + str.slice(1);
// console.log(str);


// var str = '123456';
// var arr = str.split('');
// var arr = arr.reverse();
// var result = arr.join('');

// console.log(result);
/***************** */



// var str = 'Быть или не быть вот в чём вопрос.';
// console.log(str.includes('Быть'));    


// function anagram(str1, str2) {
// var test = false;
//     var arr = str1.toLowerCase().split('');
//     var arr2 = str2.toLowerCase().split('');
//     console.log(arr, arr2);
//     if (arr.length == arr2.length)
//     for (var i = 0; i < arr.length; i++) {

//         for (var j = 0; j < arr2.length; j++) {
//             if (arr[i] == arr2[j]) {
//                 console.log('zaebis');
//                 break;
//             } else {
//                 // console.log( ' nezaebis');
//                 // break;
//             }
//         }

//     }
//     //console.log('f'== 'F');
// }

// anagram('Dneifr', 'Feindr');
// anagram('hello', 'bye');
/******** */
// function anagram(str1, str2) {
//     var arr = str1.toLowerCase().split('');
//     str2.toLowerCase();
//     var cont = 0;

//     if (str1.length == str2.length) {

//         for (var i = 0; i < arr.length; i++) {

//             if (str2.includes(arr[i])) {
//                 cont += 1;
//                 console.log(arr);
//             }

//         }
//     }

//     if (str1.length == cont) {
//         console.log('zaebis');
//     } else {
//         console.log('gopa');
//     }


// }
//anagram('аапм', 'мапа');
//anagram('hello', 'bye');
/******** */
// function Analgramm(str,str2) {
//     if(str.length !== str2.length) return false;
//     let lower = [str.toLowerCase(),str2.toLowerCase()];
//     let result = true;
//     lower[0].split('').forEach((l) => lower[1].includes(l) ? null : (result = false))
//     return result;
//     }

//     console.log(Analgramm('str','rst'));



//     const f = str => str.split('').reduce((a,b) => +a + +b);

//     console.log(f('123456'))

/*********** */

// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

// function changeRegister (str) { 
// let arr = str.split('');
// for (let i = 0; i< arr.length; i++){
//   if(arr[i] == arr[i].toLowerCase()){
//     arr[i] = arr[i].toUpperCase();
//   } else {
//   arr[i] = arr[i].toLowerCase();
//   }
// }
//   return arr.join('');

// }

// document.writeln(changeRegister(str));


/***************** */
// const num = prompt('Введите число', 55);

// function colonOdd(num) {
//     var arr = num.split('');

//     for (var i = 1; i < arr.length; i++) {

//         if (arr[i] % 2 == 1 && arr[i - 1] % 2 == 1) {
//             //console.log(arr[i]);
//            // arr[i - 1] = arr[i - 1] + ':';
//            arr[i - 1] += ':';

//             // console.log(arr[i - 1] +=':' );

//         }
//     }


//     return arr;
// }

// console.log(colonOdd(num));
// document.writeln(colonOdd(num)); // 5:5

/*** */
/***** сума чисел ****** */
// function num(n) {
//     var arr = n.toString();
//     var result = 0;
//     for (var i = 0; i < arr.length; i++) {
//         result += Number(arr[i]);
//             //console.log(arr[i]);
//     }
//     console.log(arr);

//     return result;

// }
// console.log(num(561));
/***** сума чисел ****** */

/***** MAXIMUM ****** */
// var arr = [1, 3, 5, 6, 7, 9, 27, 10, 11, 24, 25];

// console.log(Math.min.apply(Math, arr));
// console.log(Math.max.apply(Math, arr));
// console.log(Math.min.apply(null, arr));
// console.log(Math.max.apply(null, arr));

// function maxarr(max) {
//     //var arr =[0];
//     var result = [0];
//     for (var i = 0; i < max.length; i++) {
//         if (max[i] > result) {

//             result = max[i];

//         }

//     }
//     console.log(max);
//     return result;

// }
// console.log(maxarr([29, 3, 5, 6, 7, 9, 27, 10, 11, 29, 25]));
/***** MAXIMUM close ****** */
/***** minIMUM  ****** */
// function minarr(min) {
//     //var arr =[0];
//     var result = min[0];
//     for (var i = 0; i < min.length; i++) {
//         if (min[i] < result) {
//             result = min[i];
//         }
//     }
//     console.log(min);
//     return result;
// }
// console.log(minarr([4, 3, 2, 6, 7, 9, 27, 10, 11, 28, 25]));
/***** minIMUM close ****** */

/******** парні множені на 2 ******** */
// function numer(arr) {
//     var result = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 > 0) {// == 0
//             result.push(arr[i] * 2);
//         }
//     }

//     return result;
// }
// console.log(numer([4, 3, 2, 6, 7, 9, 27, 10, 11, 28, 25]));

/******** парні множені на 2 кінець ******** */

/******** Удалить повторяющиеся элементы массива ******** */
// var arr = ["php", "php", "css", "css","css",
//     "script", "script", "html", "html","js", "java"
// ];
// function removeDuplicates(arr) {

//     var result = [];

//     for (var i = 0; i < arr.length; i++){
//         if(arr[i] == arr[i + 1]){
//             arr.splice(i,1);
//            //i--;
//         }
//     }

//     return arr; 
// }

// console.log(removeDuplicates(arr));
// document.writeln(result);  // [php,css,script,html,java] 

/******** Удалить повторяющиеся элементы массива ******** */

/***** сума числа ****** */

// function num(n) {
//     var arr = n;
//     var result = 0;
//     //--------------1 ---3-----
//     //--------------2 ---3-----
//     //--------------3 ---3----- (=)      
//     for (var i = 1; i <= arr; i++) {
//         //---0 = -----0 + 1
//         //---1 = -----1 + 1
//         //---2 = -----2 + 1
//         //---3 = -----3 + 1 = exit 3 = 3
//         result = result + i; //result += i;
//         console.log(i);
//     }
//     console.log('-' + arr + '- ZAYHLO');
//     return result; //3(6)

// }
// console.log(num(3));

/***** сума числа ****** */


/***** создать номер телефона с массива ****** */
// function createPhoneNumber(numbers) {

//     var str = '(' + numbers.slice(0, 3).join('') + ')' + ' ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6).join('');
//     return str;

// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// "(123) 456-7890");

/***** создать номер телефона с массива ****** */

/*********************ХЕКС */
// function RGBToHex(r, g, b) {
//     r = r.toString(16);
//     g = g.toString(16);
//     b = b.toString(16);

//       function hex(number) {
//         if (number <= 0) return "00";
//         if (number >= 255) return "FF";
//         var res = number.toString(16);
//         if (res.length == 1) {
//             return '0' + number;
//         } 
//         return res;
//     }

// if (r.length == 1) {
//     r = "0" + r;
// } else if (r <= 0) {
//     r = "0" + "0";
// } else if (r.length == 3) {
//     r = "FF";
// }

// if (g.length == 1) {
//     g = "0" + g;
// } else if (g <= 0) {
//     g = "0" + "0";
// } else if (g.length == 3 ) {
//     g = "FF";
// }

// if (b.length == 1) {
//     b = "0" + b;
// } else if (b <= 0) {
//     b = "0" + "0";
// } else if (b.length == 3  {
//     b = "FF";
// }


//     var result = hex(r) + hex(g) + hex(b);
//     return result.toUpperCase();

// }
// console.log(RGBToHex(0, 0, 0));
// console.log(RGBToHex(0, 0, -20));
// console.log(RGBToHex(300, 255, 255));
// console.log(RGBToHex(173, 255, 47));

/*********************ХЕКС */



/********************** */
// function stringTransformer(str) {
//     var arr = str.split('');
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i].toLowerCase()) {
//             arr[i] = arr[i].toUpperCase();
//         } else {
//             arr[i] = arr[i].toLowerCase();
//         }
//     } 
//     return arr.join('').split(' ').reverse().join(' ');  
// }

// console.log(stringTransformer('Example string'));//'STRING eXAMPLE'


/*******ROMAN****** */
// function romanize(num) {
//     var lookup = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     }, roman = '', i;
//     for (i in lookup) {
//         console.log(i[lookup]);
//         if (num >= lookup[i]) {
//             console.log(lookup[i]);
//             roman += i;
//             num -= lookup[i];
//         }
//     }
//     console.log(roman);
//     return roman;
// }

// console.log(romanize(40));



// // Переводит римские числа в арабские
//  var num = prompt("Введите римское число", "ammmCMXCIX"); // default - 3999
//  if(num) alert(RomanToArabic(num));

// function RomanToArabic(num) {
// 	var i, alph = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
// 	for(var h = 0, j = 0, n = 0; j < arguments[0].length; j++) {
// 		i = alph[arguments[0].charAt(j).toUpperCase()];
// 		if(i) n += h = (h < i ? i - (h << 1) : i);
// 	}
// 	return n;
// }
// console.log(RomanToArabic(X));



/**фіівфівфів */
// var x = 1011;

// console.log(x.toString(10)); 

/**фіівфівфів */
/*               факторыал        */
// function fac(n) {
//     var res = 1;
//     for (var i = 1; i <= n; i++) {
//         res *= i;
//         //console.log(res);
//     }
//     return res;
// }

// console.log(fac(5));

/*               факторыал        */
// function fac(n) {
//     if (n == 1) {
//       return n;
//     } else {
//       return n * fac( n - 1);
//     }
//   }

//   console.log( fac(5) );

/********************** */
// function sotrNumb(a, b) {
//   return a - b;
// }

// function maxTriSum(numbers) {
//   //your code here
//   var arr = numbers.sort((function (a, b) {
//     return a - b;
//   })).slice(-3);
//   var result = 0;
//   for (var i = 0; i < arr.length; i++) {
//     result += Number(arr[i]);
//     console.log(arr[i]);
//   }
//   console.log(arr);
//   return result;
// }

// console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
// console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]));

// let sortedArr = Array.from(new Set(numbers)).sort((a,b) => b-a);
//   return sortedArr[0]+sortedArr[1]+sortedArr[2];

/** */

// function maxTriSum(numbers) {
//     var arr = numbers.sort(function (a, b) {
//         return a - b;
//     }).reverse();
//     var hash = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr);
//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] === arr[j]) {

//                 ++i;

//             }
//         }
//         hash.push(arr[i]);
//     }
//     var res = hash[0] + hash[1] + hash[2];
//     return res;
// }
// console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
// console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]));
/** */
/** bilet */
// function tickets(peopleInLine) {
//     // ...
//     var arr = peopleInLine;
//     console.log(arr);
//     var money = [0, 0, 0];

//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);

//         if (arr[i] == 25) {
//             money[0]++;
//         }
//         if (arr[i] == 50) {

//             if (money[0] < 1) {
//                 return "NO";
//             }

//             money[0]--;
//             money[1]++;

//         }

//         if (arr[i] == 100) {
//             if (money[0] < 3 && !money[1]) {
//                 return 'NO';
//             } else if (money[0] >= 3 && !money[1]) {
//                 money[0] -= 3;
//             }


//             if (money[1] && money[0]) {
//                 money[1]--;
//                 money[0]--;
//             }

//         }

//     }
//     return 'YES';
// }
/** bilet close */


/** ДОмен со строки */
// function domainName(url){
//     //your code here

//   //  url = url.replace('http://', '');
//   //  url = url.replace('https://', '');
//   //  url = url.replace('www.', '');
//   //  return url = url.split('.')[0];

//   if(url.includes("https://") || url.includes("www") > -1){
//     console.log(url);
//     url = url.replace('https://','');
//     url = url.replace('http://', '');
//     url = url.replace('www.', '');
//     console.log(url);
//   }
//     return url = url.split('.')[0];   
//   }

// Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");
// /** ДОмен со строки */



// /**Sum of Array Averages */
// const sumAverage = (arr) => {
//     // Your code here
//     let result = 0;
//     let sum = 0;
//     arr.forEach(function(item){
//      item.forEach(function(num){
//        sum += num;
//      });
//       result += sum / item.length;
//       sum = 0;
//   //    for(var i = 0; i < item.length; i++){
//   //       sum += item[i];
//   //     }
//   //     result += sum / item.length;
//   //     sum = 0;
//     });

//     return Math.floor(result);

//   }

//   Test.assertEquals(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44);
// Test.assertEquals(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]), -6);

// /**Sum of Array Averages  -------*/


// const num = [7, 10, 1, 5, 2];
// num.forEach ((item, i, arr) => {
//     console.log(i, arr, item);
// });

/** OBJECT */

// var user = {
//     name: 'Jhon',
//     surname: 'Smith',
// };

// user.name = 'ass';
// //delete user.name;
// console.log(user);
/**Проверка на пустоту важность: 5 */

// let schedule = {};
// schedule["8:30"] = "get up";
// function isEmpty(obj) {
//     for (var key in obj) {
//         console.log(key);
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty(schedule));

/**Проверка на пустоту важность: 5 */

/**Сумма свойств объекта важность: 5 */
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// //console.log('asd'+salaries.John)


// function sum(obj) {
//     var summa = 0;
//     for (var key in obj) {
//         console.log(obj[key])
//         summa += obj[key] ;
//     }
//     return summa;
// }

// console.log(sum(salaries));
/**Сумма свойств объекта важность: 5 */

/**Умножаем все числовые свойства на 2 важность: 3 */
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(obj) {
//     for (var key in obj) {
//         if (typeof obj[key] == 'number') obj[key] = obj[key] * 2;
//     }
//     return obj;
// }
// console.log(multiplyNumeric(menu));
/**Умножаем все числовые свойства на 2 важность: 3 */

/**   Find the odd int      */

// function findOdd(A) {
//     var result = {};
//     var ass = 0;

//     for(var i = 0; i < A.length; i++){
//       var num = A[i];

//       if (A[i] in result) {
//         result[ A[i] ]++
//         }else {
//         result[ A[i] ] = 1
//         }

//     }
//   for(var key in result){

//     if(result[key] % 2 !== 0){
//         ass = key;
//     }
//   }
//     console.log(ass);
//     return +ass;
//   }


// //************************** */
//   function doTest(a, n) {
//     console.log("A = ", a);
//     console.log("n = ", n);
//     Test.assertEquals(findOdd(a), n);
//   }
//   Test.describe('Example tests', function() {
//     doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//     doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//     doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//     doTest([10], 10);
//     doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//     doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
//   });

///////////////////////
// function findOdd(a) {
//     let cache = {};

//     a.forEach(function(number,i,current){
//       if(number in cache) {
//         cache[number]++
//       }else{
//         cache[number] = 1
//       }
//     });
//     console.log(Object.keys(cache))
//     return +Object.keys(cache).filter(function(key,i,current){
//       return cache[key] % 2 > 0 
//     })
//   }

// /**   Find the odd int      */

// let arr = [1, 2, 3, 4, 5, 6, null, undefined];

// let newArr = arr.filter(function(number, i, current) {
//   return number
// });

// let obj = {
//   name: 'Vasa',
//   showName: function() {
//     alert(this.name)
//   }
// }

// obj.showName() //{showName}.showName
// let showName = obj.showName; // showName()
// console.log(showName)


// // 

// // if(callback = false ) ignore 
// //if(callback = true) // element 

// console.log(newArr)


/////////////////////////////////////////////////////////////
// function firstDup(s) {
//     for (var i = 0; i < s.length; ++i) {
//         if (s.lastIndexOf(s[i]) != i) return s[i];
//     }
// }

// console.log(firstDup('tweet')); //t
// console.log(firstDup('Ode to Joy')); // ' '
// console.log(firstDup('ode to joy')); // o
// console.log(firstDup('bar')); // undefined
// console.log(firstDup('123123')); // 1
// console.log(firstDup('!@#$!@#$')); //- !

// function firstDup(s) {
//     for (let i = 0; i < s.length; i++) {
//         let copy = s.slice(i + 1);
//         if (~copy.indexOf(s[i])) return s[i]
//     }
// }
////////////////////////////////////////////////////////////


// Number.prototype.plus = function (value) {
// 	return this + value;
// }

// Number.prototype.minus = function (value) {
// 	return this - value;
// }

// console.log((2).plus(3).minus(1))

/****************************************** */
// var arr = [{
//     name: 'width',
//     value: 10
// }, {
//     name: 'height',
//     value: 20
// }];
// // Output: {width: 10, height: 20};
// function trasforming(x) {
//    // var one = [];
//     //var obj = {};
//     var one = {};
//     for (var i = 0; i < x.length; i++) {
//         if (x[i].name && x[i].value) {
//             //one.push(x[i].name);
//             //one.push(x[i].value);
//             one[x[i].name] = x[i].value
//         }
//     }
//    // one[x[i].name] = x[i].value

//     return one;


// }
// console.log(trasforming(arr));


//!-----------------------------------------------
// let obj = {};
// obj.name = 'vasya'; //*При такому записі в об'єкті буде об'явленно ключ з іменем name : {name: 'vasya'}
// obj['surname'] = 'pupkin'

// obj[4] = 'number' // 4 = '4'
// obj['4'] = 'number 2'

// // obj[4] - 'number 2'
// // obj['4'] - 'number 2'

// let key = 'key inside';
// //obj.key = {key: 42}
// //obj[key] = {'key inside':42}
// obj[key] = 42; 
// console.log(obj)



// let property = {
//     toString: function(){return 'hey'} // Об'являти всередині об'єкту ,або ззовні
//     };

//     //property.toString = function() {return 'hello'}; // toString = Функція ,яка спрацьовую при приведенні об'єкту до строки

//     console.log({toStringPropertyResult: property + 10})

//     property.valueOf = function() {return 5} // valueOf Функція ,яка спрацьовую при приведенні об'єкту до числа

//     console.log({valueOfResult: property + 10})

//     obj['obj'] = property
//     obj[property] = 'To string'

//     //console.log(obj)
//!-----------------------------------------------



let task = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

console.log(task)
// Output : [{id: 10,name:'Clementina DuBuque',username:"Moriah.Stanton"}



// function ros(obj) {
//     var arr = [];

//     for (var i = 0; i < obj.length; i++) {
//         var newObj = {}
//         newObj.id = obj[i].id;
//         newObj.name = obj[i].name;
//         newObj.username = obj[i].username;
//         arr.push(newObj);
//     }
//     return arr;


// }
function ros(arr) {
    var empty = [];
    task.forEach(function (obj) {
        var newObj = {}
        newObj.id = obj.id;
        newObj.name = obj.name;
        newObj.username = obj.username;
        newObj.address = obj.address.city;
        empty.push(newObj);
    });
return empty;
}


console.log(ros(task));

//*!Count letters in string

function letterCount(s){
    //your code here
     console.log(s);
    var obj = {};
    for (var i = 0; i < s.length; i++){
      console.log(s[i]);
      var num = 1;
        if ( s.indexOf(s[i]) !== s.lastIndexOf(s[i]) ) { 
          num += 1;
        }
      obj[s[i]] = num;
      //console.log(num) 
    }
    return obj;
    //console.log(obj);
   
    
  }

  describe("Basic tests",_=>{
    Test.assertDeepEquals(letterCount("codewars"), {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
    Test.assertDeepEquals(letterCount("activity"), {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
    Test.assertDeepEquals(letterCount("arithmetics"), {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
    Test.assertDeepEquals(letterCount("traveller"), {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
    Test.assertDeepEquals(letterCount("daydreamer"), {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});
    });