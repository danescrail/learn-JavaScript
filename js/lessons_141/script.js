// Задача 1js.Pm.Tm.DOD

// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

let firstDate = new Date(2000, 8, 1);
let secondDate = new Date(2010, 1, 15);

let diff = secondDate - firstDate;

console.log(diff);

// Задача 2js.Pm.Tm.DOD

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.

let firstDate = new Date(2000, 8, 1);
let secondDate = new Date(2010, 1, 15);

let diff = secondDate - firstDate;
let days = diff / (1000 * 60 * 60 * 24);

console.log(days);

// Задача 3js.Pm.Tm.DOD

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.

let firstDate = new Date(2000, 8, 1);
let secondDate = new Date(2010, 1, 15);

let diff = secondDate - firstDate;
let months = diff / (1000 * 60 * 60 * 24 * 30);

console.log(months);

// Задача 4js.Pm.Tm.DOD

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.

let firstDate = new Date(2000, 8, 1);
let secondDate = new Date(2010, 1, 15);

let diff = secondDate - firstDate;
let years = diff / (1000 * 60 * 60 * 24 * 30 * 12);

console.log(years);