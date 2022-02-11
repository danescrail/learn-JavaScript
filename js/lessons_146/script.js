// Задача 1js.Pm.Tm.TMT

// Определите, сколько секунд прошло с начала дня до настоящего момента времени.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
let secondDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

let diff = Math.abs(firstDate - secondDate) / (1000);

console.log(diff);

// Задача 2js.Pm.Tm.TMT

// Определите, сколько секунд осталось до конца дня.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);
let secondDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

let diff = Math.abs(firstDate - secondDate) / (1000);

console.log(diff);

// Задача 3js.Pm.Tm.TMT

// Определите, сколько дней осталось до нового года.

let now = new Date();
let firstDate = new Date(now.getFullYear(), 11, 31, 24, 0, 0);
let secondDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

let diff = Math.abs(firstDate - secondDate) / (1000 * 60 * 60 * 24);

console.log(diff);

// Задача 4js.Pm.Tm.TMT

// Определите, сколько пятниц 13-е в текущем году.

let count = 0;
let now = new Date();

for (let month = 0; month < 12; month++){
    let date = new Date(now.getFullYear(), month, now.getDate());

    if (date.getDay() == 5){
        count++;
    }
}

console.log(count);

// Задача 5js.Pm.Tm.TMT

// Определите, какой год был 3 месяца назад.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());

console.log(firstDate);

// Задача 6js.Pm.Tm.TMT

// Определите, какой день недели будет в последнем дне текущего месяца.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

console.log(firstDate.getDay());

// Задача 7js.Pm.Tm.TMT

// Напишите код, который будет определять, високосный ли текущий год.

let now = new Date();
let firstDate = new Date(now.getFullYear(), 2, 0);

if (firstDate.getDate() == 29) true;
else false;

// Задача 8js.Pm.Tm.TMT

// Напишите код, который будет находить предыдущий високосный год.

let now = new Date();
let todayYear = now.getFullYear();

for (let year = todayYear - 1; ;year--){
    let date = new Date(year, 2, 0);
    
    if (date.getDate() == 29){
        console.log(year);
        break;
    }
};

// Задача 9js.Pm.Tm.TMT

// Напишите код, который будет находить следующий високосный год.

let now = new Date();
let todayYear = now.getFullYear();

for (let year = todayYear + 1; ;year++){
    let date = new Date(year, 2, 0);
    
    if (date.getDate() == 29){
        console.log(year);
        break;
    }
};
