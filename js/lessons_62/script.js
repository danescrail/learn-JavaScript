// Задача 1
// Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.
let obj = {};

obj["пн"] = 1;
obj["вт"] = 2;
obj["ср"] = 3;
obj["чт"] = 4;
obj["пт"] = 5;
obj["сб"] = 6;
obj["вс"] = 7;

console.log(obj)

// Задача 2js

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.


let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};

for (i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);



// Задача 3js.Pm.Lp.OLF
// Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней, а значениями - их названия.

arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr2[i]] = arr1[i];
}

console.log(obj);

// Задача 4js.Pm.Lp.OLF
// Дан объект:
// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

obj = {
    'a': 12,
    'b': 21,
    'c': 13,
    'd': 23,
    'e': 17
};
let result = {};

for (let key in obj) {
    if (obj[key] > 10 && obj[key] < 20) {
        result[key] = obj[key]
    }
}
console.log(result);

// Задача 5
// Дан объект:
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// Запишите в новый объект дни недели, номера которых являются нечетными числами.

obj = {
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
    7: 'вс'
};
result = {}

for (let key in obj) {
    if (key % 2 == 1) {
        result[key] = obj[key];
    }
}
console.log(result);

// Задача 6
// Дан объект:
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5
};

for (let key in obj) {
    obj[key] = obj[key] ** 2;
}
console.log(obj);

//Задача 7
//Самостоятельно, не подсматривая в мой код, выполните переворот какого-нибудь объекта.

obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
result = {};

for (let key in obj) {
    result[obj[key]] = key;
}

console.log(result);