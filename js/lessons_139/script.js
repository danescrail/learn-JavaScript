// Задача 1js.Pm.Tm.TS

// Узнайте, какой день недели был в ваш день рождения.

let date = new Date(2004, 5, 12);
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);