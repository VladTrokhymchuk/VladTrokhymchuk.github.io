// let timeId = setTimeout(sayHello, 1000);// через какое то время откроется обект
// clearTimeout(timeId);

// let timeId = setInterval(sayHello, 3000); // з каждым новым интервалом добавляется один 
// // clearTimeout(timeId);

// function sayHello() {
//    console.log('sraka 3000');
// } 



//// рекурсия функция вызывает саму себя
// let timerId = setTimeout(function log() {
//     console.log('sraka 545');
//     setTimeout(log, 2000);
// }) ;

// 9-33 leson 19


let btn = document.querySelector('.btn'),
    elem = document.querySelector('.elem');
    function myAnimation() {
        let pos = 0;

        let id = setInterval(frame, 10);
        function frame () {
            if (pos === 210) {
                clearInterval(id); //для остановки таймера
            } else {
                pos ++;
                elem.style.top = pos + 'px';
                elem.style.left = pos +'px';
            }
        }
    }

    btn.addEventListener('click', myAnimation);

    let btnBlock = document.querySelector('.btn-block'),
        btns = document.getElementsByTagName('button');

    btnBlock.addEventListener('click', function(event) {
        if (event.target && event.target.tagName == 'BUTTON') {
            console.log('hello');
        }
    });

        