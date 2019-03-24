//интерполяция
let name = 'Ivan',
    age = 30,
    mail = 'ex@mail.com';

    document.write(`пользователю ${name} ${age} let. Ego pohta adres: ${mail}`);

    function makeArray() {
        var items = [];

        for (let i = 0; i < 10; i++) {
            var item = function() {
                console.log(i);
            };
            items.push(item);
        }

        return items;
    }

    var arr = makeArray();

    arr[1]();
    arr[2]();
    arr[6]();

    /////////-----------26

    let fun = () => {
        console.log(this);
    };
    // fun();

    let obj = {
        number: 5,
        sayNumber: function() {
            let say = () => { //нет своего контекста она берет у родителя 
                console.log(this);
            };
            say();
        }
    };

    obj.sayNumber();


    let btn = document.querySelector('button');

    btn.addEventListener('click', function() {
        let show = () => {
            console.log(this);
        };
        show();
    });

    //////////////-----------27