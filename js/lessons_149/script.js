// Задача 1js.Pm.Tm.CDG

// Используя приведенный мною код, окончательно решите задачу.

let now  = new Date();
let date = new Date(now.getFullYear(), 2, 8); // текущий год

let diff = date - now; // разница

if (diff > 0) {
	console.log("еще будет");
} else if (diff == 0) {
	console.log("идет");
} else {
	console.log("в следующем году");
}

// Задача 2js.Pm.Tm.CDG

// Пусть ваш День Рождения - первое марта. Определите, сколько дней осталось до вашего ближайшего дня рождения.

let now  = new Date();
let date = new Date(now.getFullYear(), 2, 1); // текущий год

let diff = date - now; // разница

if (diff > 0) {
	console.log(diff / (1000 * 60 * 60 * 24));
} else if (diff == 0) {
	console.log(diff / (1000 * 60 * 60 * 24));
} else {
	console.log(diff / (1000 * 60 * 60 * 24));
}

// Задача 3js.Pm.Tm.CDG

// Пусть теперь День Рождения может быть произвольным и содержится в переменных month и day.
// Определите, сколько дней осталось до заданного этой датой праздника.
// Учтите при решении, что есть счастливчики, которые родились 29 февраля. Не забудьте их учесть в вашем решении

let month = 1;
let day = 2;

function birthday(month, day){
    let now = new Date();
    let date = new Date(now.getFullYear(), month - 1, day);

    let diff = Math.abs(date - now);
    if (diff > 0) {
        return (diff / (1000 * 60 * 60 * 24));
    } else if (diff == 0) {
        return (diff / (1000 * 60 * 60 * 24));
    } else {
        return (diff / (1000 * 60 * 60 * 24));
    };
};