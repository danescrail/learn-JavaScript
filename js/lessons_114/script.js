// Задача 1js.Pm.FA.Cls
// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.


function test() {
    let num = 1;
    return function () {
        alert(num);
        return num++;
    };
};

let func1 = test();
let func2 = test();

func1();
func1();
func1();
func1();

// Задача 2js.Pm.FA.Cls

// Пусть функция в замыкании хранит число 10.
// Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

function test() {
    let num = 10;

    return function () {
        console.log(num);
        return num--;
    };
};

let func1 = test();

func1();
func1();
func1();
func1();
func1();
func1();


// Задача 3js.Pm.FA.Cls

// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
// а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

function test() {
    let num = 10;

    return function () {
        for (let i = num; i > 0; i--) {
            console.log(num);
            num--;
        }
        return console.log("отсчет окончен");
    }
}

let func1 = test();