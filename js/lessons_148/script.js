// Задача 1js.Pm.Tm.COWD

// Получите объект с датой, содержащий текущий момент времени.
// Получите объект с датой, содержащий полдень текущего дня.
// Сравните два этих объекта и определите, был ли уже полдень или нет.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
let secondDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

if (firstDate > secondDate) true;
else false;

// Задача 2js.Pm.Tm.COWD

// Получите объект с датой, содержащий текущий момент времени.
// Получите объект с датой, содержащий 15 число текущего месяца.
// Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.

let now = new Date();
let firstDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let secondDate = new Date(now.getFullYear(), now.getMonth(), 15);

if (firstDate > secondDate) true;
else false;

