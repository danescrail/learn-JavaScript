// Задача 1js.Pm.UF.Ex
// Напишите функцию, которая будет находить сумму квадратов элементов массива.

let arr = [1, 2, 3, 4, 5];

function sum_square(arr) {

    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return (sum);
}

sum_square(arr);

// Задача 2js.Pm.UF.Ex
// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.

function getDigitsSum(number) {
    let sum = 0;
    let num = String(number);

    for (let i = 0; i < num.length; i++) {
        sum = Number(num[i]) + sum;
    }
    return (sum);
}

// Задача 3js.Pm.UF.Ex
// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей,
// то есть чисел, на которое делится наше число.
// К примеру, если мы передадим число 24 - мы должны получить следующий массив:

// [1, 2, 3, 4, 6, 8, 12, 24]

function getDivisors(num) {
    let arr = [];

    for (let i = 1, j = 0; i <= num; i++) {
        if (num % i == 0) {
            arr[j] = i;
            j++;
        }
    }
    console.log(arr);
}

// Задача 4js.Pm.UF.Ex

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.


function reverseStr(str) {

    let result = str.split('').reverse().join('');
    return (result);
}


// Задача 5js.Pm.UF.Ex
// Сделайте функцию delElem, которая параметрами будет принимать значение и массив
// и удалять из массива все элементы с таким значением.

function delElem(elem, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}


// Задача 6js.Pm.UF.Ex
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:

// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

function func(num) {
    let arr = [];

    for (let i = 1, j = 0; i <= num; i++, j++) {
        arr[j] = i;
    }
    return arr;
}
console.log(func(5));

// Задача 7js.Pm.UF.Ex
// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:

// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

function func(first_num, last_num) {
    let arr = [];

    for (let i = first_num, j = 0; i <= last_num; i++, j++) {
        arr[j] = i;
    }
    return arr;
}
func(3, 7);