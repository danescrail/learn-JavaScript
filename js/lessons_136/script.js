// Задача 1js.Pm.Tm.DF

// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Используйте для всех частей даты (кроме года) созданную нами функцию для
// добавления нуля при необходимости.

let date = new Date();

function addZero(num) {
    let str = "";

    if (num >= 0 && num < 10) {
        str = "0" + num;
    } else {
        return (num);
    }
    return Number(str);
}

console.log(addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds()) + " " +
    addZero(date.getDate()) + "." + addZero(date.getMonth()) + "." + date.getFullYear());


// Задача 2js.Pm.Tm.DF

// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.


let date = new Date();

let info = addZero(date.getFullYear()) + "-" + addZero(date.getMonth() + 1) + "-" + date.getDate();
let str_info = String(info);
let result = str_info.split('-').reverse().join('.');
console.log(result);