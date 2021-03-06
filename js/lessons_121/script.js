// Задача 1js.Pm.Enm.Mp

// Дан массив с числами. 
// Используя метод map извлеките из каждого элемента массива квадратный корень
// и запишите результат в новый массив.

let arr = [1, 2, 3, 4, 5];

let sqrt = arr.map(function (elem) {
    return Math.sqrt(elem);
});

console.log(sqrt);

// Задача 2js.Pm.Enm.Mp

// Дан массив со строками.
// Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let arr = ["1", "2", "3", "4", "5"];

let addText = arr.map(function (elem) {
    return elem += "!";
});

console.log(addText);

// Задача 3js.Pm.Enm.Mp
// Дан массив со строками. Используя метод map
// переверните символы каждой строки в обратном порядке.

let arr = ["привет", "мир!"];

let str_reverse = arr.map(function (elem) {
    return elem = elem.split('').reverse().join('');
});

console.log(str_reverse);

// Задача 4js.Pm.Enm.Mp

// Дан следующий массив:

// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

let arr = ['123', '456', '789'];

let add_Massive = arr.map(function (elem) {
    let result = [];

    for (let i = 0; i < elem.length; i++) {
        result.push(elem[i]);
    }

    return result;
});

console.log(add_Massive);


// Задача 5js.Pm.Enm.Mp

// Дан массив с числами.
// Используя метод map запишите в каждый элемент массива значение этого элемента,
// умноженное на его порядковый номер в массиве.

let arr = [1, 2, 3, 4, 5];

let getMultIndex = arr.map(function (elem, index) {
    return elem * index;
});

console.log(getMultIndex);