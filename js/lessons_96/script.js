// Задача 1js.Pm.FP.ASh

// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию.
// При решении задачи код функции getRandomInt скопируйте из учебника.
let arr = [1, 2, 3, 4, 5];

function shuffle(arr) {
    let result = [];

    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1);
        result.push(elem);
    }

    return result;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

shuffle(arr);

//Задача 2js.Pm.FP.ASh

// Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона,
// и возвращающую массив, заполненный целыми числами из этого диапазона.

function range(min, max) {
    let result = [];

    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}


// Задача 3js.Pm.FP.ASh

// Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона.
// При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle.

function rangeRand(min, max) {
    return shuffle(range(min, max));
}