// //Дата и время в интерпретаторе JavaScript
// var date = new Date();

// // var date2 = Date();
// // alert(date.getDate());
// // var days = ['воскре','ponedilok', 'vsvtorok'];
// // alert(days[date.getDay()]);
// // alert(date.getFullYear());
// // alert(date.getHours());
// // alert(date.getMilliseconds());
// // alert(date.getMinutes());
// // var  month = ['fevral','mart', 'april','may','may2','may3','may4','may5'];
// // alert(month[date.getMonth()]);
// // alert(date.getSeconds());
// // alert(date.getTime());
// // alert(date.getTimezoneOffset());



// // date.setDate(10);
// // date.setFullYear(2016,7,4);



// // console.log(date.toDateString()); //преобразовует дату в строку 
// // console.log(date.toJSON()); 

// // console.log(Date.now()); 


// //часы 

// function dsiplayTime() {
//     var now = new Date();
//     var div = document.getElementById("clock");
//     var sDate = new Date(2019, 12, 31);
//     var timer = sDate.getTime() - now.getTime();

//     var days = parseInt(timer / (24*60*60*1000))%24;
//     var hours = parseInt(timer / (60*60*1000))%60;
//     var min = parseInt(timer / (60*1000))%60;
//     var sec = parseInt(timer / (1000))%60;

//     div.innerHTML = days + ' / ' + hours + ' / ' + min + ' * ' + sec;

//     setTimeout(dsiplayTime,1000);
// }

// window.onload = dsiplayTime;

// //часы 


// //Дата и время в интерпретаторе JavaScript