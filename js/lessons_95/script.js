// Задача 1js.Pm.FP.AR

// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию.
// При решении задачи код функции getRandomInt скопируйте из учебника


let arr = [1, 2, 3, 4, 5];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
    let elem = getRandomInt(0, arr.length - 1);
    return arr[elem];
}



// Задача 2js.Pm.FP.AR
// Используя созданную функцию, найдите сумму трех случайных элементов из массива.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
    let result = [];
    let elem = getRandomInt(0, arr.length - 1);
    for (i = 1; i < 4; i++) {
        result.push(elem);
    }
    return result;
}

function sumNumbers(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}