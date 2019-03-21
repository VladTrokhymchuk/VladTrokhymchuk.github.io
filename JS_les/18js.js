let btn = document.querySelectorAll('button'), //для метода фор ич querySelectorAll
    wrap = document.querySelector('.wrapper')
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('Vu najali 1 knopku');
// };

// btn[0].onclick = function() {
//     alert('Vu snova najali 1 knopku');
// }

btn[0].addEventListener('click', function(event) {
    // console.log(event);
    // let target = event.target;
    // target.style.display = 'none';
     console.log('Proizohlo sobutie: ' + event.type + ' na element ' + event.target);
});

wrap.addEventListener('click', function() {
    console.log('Proizohlo sobutie wrap: ' + event.type + ' na element ' + event.target);
});

link.addEventListener('click', function(event) {
    event.preventDefault();//можно отправлять данные без перезагрузки страницы
    console.log('Proizohlo sobutie link: ' + event.type + ' na element ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Vushli');
    });
});

// btn[0].addEventListener('click', function() {
//     alert('Vu snova najali 1 knopku');
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('Vu snova najali 1 knopku');
// });


////----------------19------------------
