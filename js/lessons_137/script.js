// Задача 1js.Pm.Tm.WG

// Выведите на экран номер текущего дня недели.

let date = new Date();

console.log(date.getDay());

// Задача 2js.Pm.Tm.WG

// Определите, является ли текущий день недели выходным или рабочим днем.


function getDay() {
    let date = new Date();
    let day = date.getDay();

    return day == 6 || day == 0;
}
getDay();

// Задача 3js.Pm.Tm.WG

// Определите сколько дней осталось до ближайшего воскресенья.

function foundDay() {
    let date = new Date();
    let day = date.getDay();

    return Math.abs(day - 7);
}
foundDay();