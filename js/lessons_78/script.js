// Задача 1js.Pm.SM.Mth
// Возведите 2 в 10 степень.

console.log(Math.pow(2, 10));

// Задача 2js.Pm.SM.Mth
// Найдите квадратный корень из 245.

console.log(Math.sqrt(245));

// Задача 3js.Pm.SM.Mth
// Дан следующий массив:

// [4, 2, 5, 19, 13, 0, 10]
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let sumArr = 0;
let arr = [4, 2, 5, 19, 13, 0, 10]

for (let elem of arr) {
    sumArr += Math.pow(elem, 3);
}

console.log(Math.sqrt(sumArr));

// Задача 4js.Pm.SM.Mth
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

let sqrt = Math.sqrt(379);
console.log(Math.round(sqrt) + " " + sqrt.toFixed(1) + " " + sqrt.toFixed(2));

// Задача 5js.Pm.SM.Mth
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let sqrt = Math.sqrt(587);
console.log(Math.floor(sqrt) + " " + Math.ceil(sqrt));

// Задача 6js.Pm.SM.Mth
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

console.log(Math.min(4, -2, 5, 19, -130, 0, 10) + " " + Math.max(4, -2, 5, 19, -130, 0, 10));

// Задача 7js.Pm.SM.Mth
// Выведите на экран случайное целое число от 1 до 100.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

// Задача 8js.Pm.SM.Mth
// С помощью цикла заполните массив 10-ю случайными целыми числами.

let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = getRandomInt(1, 100);
}

console.log(arr);

// Задача 9js.Pm.SM.Mth
// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

let a = 10;
let b = 15;

console.log(Math.abs(a - b));