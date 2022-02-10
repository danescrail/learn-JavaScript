// Задача 1js.Pm.Tm.TmF

// Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

let date = new Date(2025, 0, 1, 23, 59, 59);
console.log(date.getTime());

// Задача 2js.Pm.Tm.TmF

// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

let firstDate = new Date(1988, 2, 1);
let secondDate = new Date(2000, 0, 10);

let diff = secondDate - firstDate;
let day = diff / (1000 * 60 * 60 * 24)


console.log(day);

// Задача 3js.Pm.Tm.TmF

// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

let nowDate = new Date(2022, 1, 2);
let birthdayDate = new Date(2004, 5, 12);

let diff = nowDate - birthdayDate;
let day = diff / (1000 * 60 * 60 * 24 * 30);


console.log(day);