// Задача 1js.Pm.Enm.Fi

// Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [1, 2, 3, 4, -5, 6, -7, 9];

let result = arr.filter(function (elem) {
    return elem > 0;
});

console.log(result);

// Задача 2js.Pm.Enm.Fi

// Дан массив с числами. Оставьте в нем только отрицательные числа.

let arr = [1, 2, 3, 4, -5, 6, -7, 9];

let result = arr.filter(function (elem) {
    return elem < 0;
});

console.log(result);

// Задача 3js.Pm.Enm.Fi

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

let arr = [1, 2, 3, 4, -5, 6, -7, 9, 11, 20, 30];

let result = arr.filter(function (elem) {
    return (elem > 0 && elem < 10);
});

console.log(result);

// Задача 4js.Pm.Enm.Fi

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let str = ["авываы", "абвв", "ваы"];

let result = str.filter(function (elem) {
    return elem.length > 5;
});

console.log(result);

// Задача 5js.Pm.Enm.Fi

// Дан массив с числами. Оставьте в нем только те числа,
// произведение которых на их порядковый номер меньше 30.

let arr = [0, 1, 2, 3, 4, 5, 6];

let result = arr.filter(function (elem, index) {
    return elem * index < 30;
});

console.log(result);

// Задача 6js.Pm.Enm.Fi

// Дан массив, в нем могут быть обычные элементы и подмассивы,
// например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

let arr = [1, 2, [3, 4], 5, [6, 7]];

let result = arr.filter(function (elem) {
    return typeof elem == "number";
});

console.log(result);

// Задача 7js.Pm.Enm.Fi

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

let arr = [1, 2, 3, 4, -5, 6, -7, 9];

let result = arr.filter(function (elem) {
    return elem < 0;
});
console.log(result.length);