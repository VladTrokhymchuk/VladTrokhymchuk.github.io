let box = document.getElementById('box'),
btn = document.getElementsByTagName('button'),
circle = document.getElementsByClassName('circle'),
heart = document.querySelectorAll('.heart'),//имеет один метод фор ич
oneHeart = document.querySelector('.heart'),
wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[2]);
// console.log(oneHeart);
//////////// ---------17------
box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//  for (let i = 0; i < heart.length; i++) {
//      heart[i].style.backgroundColor = 'blue';
//  }


// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'red';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Tut bil ya');

    div.classList.add('black');
    // document.body.appendChild(div);
    // wrapper.appendChild(div);\

    // div.innerHTML = '<h1>hello world!</h1>';
    div.textContent = 'hello world!';// Для безопасности

    document.body.insertBefore(div, circle[1]);
    document.body.removeChild(circle[1]);
    wrapper.removeChild(heart[2]);
    document.body.replaceChild(btn[1], circle[1]);


console.log(div);

//-----------18
