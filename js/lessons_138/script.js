// Задача 1js.Pm.Tm.WDO

// Пусть дан следующий массив:

// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// Выведите с помощью этого массива название текущего месяца.

let date = new Date();

let month = date.getDate();

let months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

console.log(months[month]);