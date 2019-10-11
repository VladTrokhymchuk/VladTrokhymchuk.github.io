function stringWork() {

    var str = document.getElementById('head').innerHTML;
    ///////////////////////////////////////////////////

    // new String();
    // String();

    //var result = typeof String(str);
    //var result = str.charAt(11);

    //var result = str[11];
   // var result = str.charCodeAt(); //код символа юникода
    //var result = str.concat('hello', 'world');// конкатинация +

    //var result = String.fromCharCode(str.charAt(11));//1056
    //var result = str.indexOf('JavaScript');// поиск по строке сначала
    var result = str.length ;

    //var result = str.match(/\d+/g);//регулярные выражения
    
   // var result = str.replace(/\d+/,'try');
    // var result = str.search(/\d+/);

    ///////////////////////////////////////////////////
    document.getElementById('result').innerHTML = result;
}

window.onload = function() {
    stringWork();
};