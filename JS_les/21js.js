let box =document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth, // lientWidth
    height = box.scrollHeight; //scrollWidth можна изменять

    console.log(width);
    console.log(height);

    btn.addEventListener('click', function() {
        box.style.height = box.scrollHeight + 'px';
    });
    //21ур 13,50ми

    let f = function(str, collback) {
        console.log(collback('pidor'))
        return collback(str);
    } 
    
    function collback(sraka) {
        
        return sraka.toUpperCase();
    }
    console.log( f('asd', collback));
    