//32less
let drink = 1;

function shoot(arrow) {
    console.log('Vu sdelaly vistrel');
    let promise = new Promise(function (resolte, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolte({}) : reject('Vu promahnulis');
        }, 2000);
    })

    return promise;

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

shoot({})
    .then(mark => console.log('Popal V CEL'))
    .then(win)
    .catch(loose)
