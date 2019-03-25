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
    function calcorDoube(number, basis = 2) {
        // basis = basis || 2; ES5
        console.log(number*basis);
    }

    calcorDoube(3,3);
    calcorDoube(6);


    class Rectangle {
        constructor(height, width = 20) { //по умолчанию =20
            this.height = height;
            this.width = width;
        }
        calcArea() {
            return this.height * this.width;
        }
    }

    const square = new Rectangle(10, 10);
    console.log(square.calcArea());


    //оператор розворота масива

    let video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'bloger'],
        intrnet = [...video, ...blogs, 'vk', 'facebook'];

        console.log(intrnet);

        function log(a, b, c){
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(a + b + c);
        }

        let numbers = [2, 3, 6];
        log(...numbers);

        //30