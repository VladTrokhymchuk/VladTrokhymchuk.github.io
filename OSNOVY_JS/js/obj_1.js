 var obj = {

 };

 var a = 10;
 var b = 20;

 var obj1 = {
     one: 'Hello',
     two: 'World',
     'some string': a + b,
     three: {
         a: 1,
         b: 2,
         c: {
             'str1': 10,
             'str2': 20,
         },
     },
     five: undefined,
 };

 //  var date = new Date();
 //  var arr = new Array(); // []
 //var obj2 = new Object(); // var obj2 = {};

 //  var str = 'some string';

 //  function addObj(o, i, v) {
 //      return o[i] = v;
 //  }

 //  addObj(obj, 'one', 'sraka');
 //  addObj(obj, 'two', 'ass');
 //  console.log(obj);
 //  console.log(obj.one);
 //  console.log(obj.two);

 var obj2 = Object.create(obj1); //var obj2 = new Object(); // var obj2 = {};
 //  var obj3 = Object.create(Object.prototype);
 //obj3.one = 1;

 //console.log(obj3.one);
 //  console.log(obj1.one);
 //delete obj3.one;
 //console.log(obj1.one);
 /**************************************** */
 //  for (v in obj1) {
 //      console.log(v + ' - ' + obj1[v]);

 //  }

 //  function iteration(o) { //может добираться  до вложеных обектов
 //      for (v in o) {
 //          if(typeof o[v] == 'object'){
 //             iteration(o[v]); //рекурсивно передали функцию iteration(o)
 //          }else {
 //              console.log(v + ' - ' + o[v]);
 //          }


 //      }
 //  }
 //  iteration(obj1);

 /*************************** */

//  /*********  OBJECT--2  ***************** */
//  // if(obj1.one){
//  //     alert(obj1.one);

//  // }


//  //  if ('one' in obj1) {
//  //      alert(obj1.one);
//  //  }

//  //  if (obj1.hasOwnProperty('one')) {
//  //      alert(obj1.one);
//  //  }

//  //  if (obj1.propertyIsEnumerable('one')) {
//  //      alert(obj1.one);
//  //  }

//  function iteration(o) { //может добираться  до вложеных обектов
//      for (v in o) {
//          if (!o.hasOwnProperty(v)) continue;
//          if (typeof o[v] === 'function') continue;

//          if (typeof o[v] == 'object') {
//              iteration(o[v]); //рекурсивно передали функцию iteration(o)
//          } else {
//              console.log(v + ' - ' + o[v]);
//          }
//      }
//  }
//  //   iteration(obj2);




//  //  var obj3 = {
//  //      //name: 'РОСТІК',
//  //      //name2: 'ПІСЮН',
//  //      prop1: 30,
//  //      prop2: 50,
//  //      func: function () {
//  //          console.log(this.prop1 + this.prop2);
//  //          //alert(this.name + ' ' + this.name2)
//  //      }
//  //  }


//  //  obj3.func2 = function () {
//  //      alert('func2');
//  //  }


//  //  function foo() {
//  //      console.log('foo');
//  //  }

//  //  obj3.func3 = foo;
//  //  obj3.func();
//  //  obj3.func3();

//  /////////////////////

//  var o = {
//      prop1: 10,
//      prop2: 20,

//      func: function () {
//          console.log(this.prop1 + this.prop2);
//          //alert(this.name + ' ' + this.name2)
//      },
//      //метод доступа get 1
//      get summ() {
//          return this.prop1 + this.prop2;
//      },
//      // метод записи set 2
//      set summ(value) {
//          this.prop1 += value;
//      }
//  }

//  //  o.summ = 5;
//  //  console.log(o.summ);

//  Object.defineProperty(o, 'prop3', {

//      value: 100,
//      writable: true, // не можна змынювати false
//      enumerable: false, // виключаэ з списка
//      configurable: true, // true запрещено для настройки false
//  });
//  //////////////////////////
//  Object.defineProperty(o, 'prop3', {

//      enumerable: true, // добавим настройку
//  });
//  ////////////////

//  //o.prop3 = 50;
//  //iteration(o);

//  function People(name, age) {
//      this.name = name;
//      this.age = age;

//      //  this.summ = function(){
//      //      return this.name + ' - ' + this.age;
//      //  }
//  }

//  People.prototype = obj1;

//  People.prototype.summ = function () {
//      return this.name + ' - ' + this.age;
//  }

//  var Ben = new People('BEN VAFLER', 21);
//  console.log(Ben.summ()); // obj1.summ()
//  console.log(obj1); // obj1.summ()

//  /*********  OBJECT--2  ***************** */


 /*********  OBJECT--3 window chast 1 ***************** */

 window.onload = function () {

     var wrap = document.getElementById('pupup_overlay');

     var closeB = document.getElementById('pupup_close');
     closeB.onclick = pupupClose;

     //<div style = "dsiplay: block">
     function pupup() {
         wrap.style.display = 'block';
         //wrap.style.opacity = 1;
         pupupIn(1);
     }

     function pupupClose() {
         pupupOut(0);
     }

     function pupupIn(x) {
         // 0.05 0.1 0.15
         var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;
         if (op < x) {
             op += 0.05;
             wrap.style.opacity = op;
             // setTimeout(pupupIn, 50, x);
             setTimeout(function () {
                 pupupIn(x);
             }, 20); // Кросбраузерное
         }
     }


     function pupupOut(x) {
         // 0.05 0.1 0.15
         var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

         if (op > x) {
             op -= 0.05;
             wrap.style.opacity = op;
              setTimeout(pupupOut, 50, x);
            //  setTimeout(function () {
            //      pupupOut(x);
            //  }, 20); // Кросбраузерное
         }
     }

     if (wrap.style.opacity == x) {
         wrap.style.display = 'none';
     }
     setTimeout(pupup, 3000);
 }

 /*********  OBJECT--3 window chast 1 ***************** */