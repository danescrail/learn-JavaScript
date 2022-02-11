//Тут код

// Задача 1js.Pm.Tm.GOTM

// Определите, какой день недели будет 31 декабря текущего года.
let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);

console.log(date.getDay());

// Задача 2js.Pm.Tm.GOTM

// Определите, какой день недели будет 1 числа текущего месяца.

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 1);

console.log(date.getDay());

// Задача 3js.Pm.Tm.GOTM

// Определите, какой день недели будет 31 декабря следующего года.

let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);

console.log(date.getDay());

// Задача 4js.Pm.Tm.GOTM

// Определите, какой день недели будет через год в такую же дату, как сегодня.

let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

console.log(date.getDay());


// Задача 5js.Pm.Tm.GOTM

// Определите, какой день недели был год назад в такую же дату, как сегодня.

let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

console.log(date.getDay());

// Задача 6js.Pm.Tm.GOTM

// Вопрос: не будет ли проблемы, если текущий месяц январь?
// Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.
// Не, не будет.

let now = new Date();
let date = new Date(now.getFullYear(), 0 - 1, 31);

console.log(date);

// Задача 7js.Pm.Tm.GOTM

// Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

console.log(date.getDay());

// Задача 8js.Pm.Tm.GOTM

// Определите, сколько дней между 1 января и 10 сентября текущего года.

let now = new Date();
let firstDate = new Date(now.getFullYear(), 0, 1)
let secondDate = new Date(now.getFullYear(), 8, 10)

let diff = Math.abs(firstDate - secondDate) / (1000 * 60 * 60 * 24);

console.log(diff);

// Задача 9js.Pm.Tm.GOTM

// Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth(), 20)
let secondDate = new Date(now.getFullYear(), now.getMonth() + 1, 10)

let diff = (secondDate - firstDate) / (1000 * 60 * 60 * 24);

console.log(diff);

// Задача 10js.Pm.Tm.GOTM

// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12, now.getMinutes(), now.getSeconds());
let secondDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

let diff = (secondDate - firstDate) / (1000 * 60 * 60);

console.log(diff);

// Задача 11js.Pm.Tm.GOTM

// Определите, сколько часов прошло между началом дня и текущим моментом времени.

let firstDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
let secondDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

let diff = Math.abs(firstDate - secondDate) / (1000 * 60 * 60);

console.log(diff);

// Задача 12js.Pm.Tm.GOTM

// Определите, сколько часов осталось до конца дня.

let firstDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
let secondDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);

let diff = Math.abs(firstDate - secondDate) / (1000 * 60 * 60);

console.log(diff);

// Задача 13js.Pm.Tm.GOTM

// Рассмотрите промежуток от 2000 года до текущего года.
// Определите, сколько раз 1 января в этом промежутке попадало на выходной день,
// то есть на субботу или на воскресенье.

let count = 0;

for (let year = 2000; year <= 2022; year++){
    let date = new Date(year, 0, 1);

    if (date.getDay() == 6 || date.getDay() == 7){
        count++;
    }
}

console.log(count);