//32less
let drink = 1;

function shoot(arrow, headshot, fail) {
    console.log('Vu sdelaly vistrel');

    setTimeout(function () {
        Math.random() > .5 ? headshot({}) : fail('Vu promahnulis');
    }, 2000)
};

function win() {
    console.log('pobeDAA');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('VAM kupili piBo');
}

function giveMoney() {
    console.log('DALI BABLO');
}

function loose() {
    console.log('loxlox');
}

shoot({},
    function (mark) {
        console.log('popal');
        win(mark, buyBeer, giveMoney);
    },
    function (miss) {
        console.error(miss);
        loose();
    }
)