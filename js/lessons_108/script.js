// Задача 1js.Pm.FA.PFAP

// Сделайте функцию test, параметрами принимающую 3 функции.
// Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2,
// третьим - функцию, возвращающую 3. Выведите на экран сумму результатов функций.

function test(func1, func2, func3) {
    let sum = 0;

    function func1() {
        return 1;
    }

    function func2() {
        return 2;
    }

    function func3() {
        return 3;
    }

    return (func1() + func2() + func3());
}

console.log(test());


// Задача 2js.Pm.FA.PFAP

// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3() {
    return 3;
}

function test(func1, func2, func3) {
    return (func1() + func2() + func3());
}
test(func1, func2, func3);

// Задача 3js.Pm.FA.PFAP

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
// Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

function func1(num) {
    return 1;
}

function func2(num) {
    return 2;
}

function func3(num) {
    return 3;
}

function test(func1, func2, func3) {
    return (func1() + func2() + func3());
}
test(func1, func2, func3);

// Задача 4js.Pm.FA.PFAP

// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

let func1 = function () {
    return 1;
};
let func2 = function () {
    return 2;
};
let func3 = function () {
    return 3;
};

function test(func1, func2, func3) {
    return (func1() + func2() + func3());
}

test(func1, func2, func3);


// Задача 5js.Pm.FA.PFAP

// Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию,
// которая параметром будет принимать число и возвращать его куб.

// Выведет 9:
test(function (num) {
    return num ** 3;
});

function test(func) {
    console.log(func(3));
}

// Задача 6js.Pm.FA.PFAP

// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.


function test(func) {
    console.log(func(4));
}

function func(num) {
    return num ** 3;
}

test(func);


// Задача 7js.Pm.FA.PFAP

// Переделайте передаваемую функцию на Function Expression с тем же именем func.

let func = function (num) {
    return num ** 3;
};

function test(func) {
    console.log(func(4));
}

test(func);

// Задача 8js.Pm.FA.PFAP

// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
// При вызове передаваемая функции внутри test передайте в передаваемую функцию число 2 и число 3.
// Выведите алертом результат.
test(func);

function func(num1, num2) {
    return num1 + num2;
}

function test(func) {
    alert(func(2, 3))
}

// Задача 9js.Pm.FA.PFAP

// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также
// параметром принимающие числа.

// Пусть функция test возвращает сумму результатов переданных функций:

// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3,
// вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб.
// Выведите результат работы на экран.

function test(num, func1, func2) {
    return func1(num) + func2(num);
}

let func1 = function (num) {
    return num ** 2;
};
let func2 = function (num) {
    return num ** 3;
}

test(2, func1, func2);

// Задача 10js.Pm.FA.PFAP
// Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
// Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию.
// Переданная функция должна будет применится к каждому элементу массива:

function test(arr, func) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

let result = test(
    [1, 2, 3, 4, 5],
    function (num) {
        return num ** 2;
    }
);

console.log(result);

// Задача 11js.Pm.FA.PFAP

// Вызовите созданную вами функцию test, передав ей параметром массив с числами.
// Сделайте так, чтобы функция вернула массив с кубами этих чисел.

function test(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 3;
    }

    return arr;
}