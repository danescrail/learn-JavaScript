// Задача 1js.Pm.FA.Clb

// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

let arr = [1, 2, 3, 4, 5];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return result;
}

let result = each(arr, function (num) {
    return num * 2;
});

console.log(result);
// Задача 2js.Pm.FA.Clb

// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

let arr = ["abc", "dbv", "wpc"];


function square(str) {
    return str.split('').reverse().join('');
}

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return result;
}

let result = each(arr, square);

console.log(result);

// Задача 3js.Pm.FA.Clb

// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

let arr = ["abc", "dbv", "wpc"];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return result;
}

let result = each(arr, function (str) {
    let result = str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    return result;
});

console.log(result);

// Задача 4js.Pm.FA.Clb

// С помощью следующей функции возведите все элементы массива в куб:

// function cube(num) {
// 	return num ** 3;
// }

let arr = [1, 2, 3, 4, 5];

function cube(num) {
    return num ** 3;
}

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return result;
}

let result = each(arr, cube);

console.log(result);