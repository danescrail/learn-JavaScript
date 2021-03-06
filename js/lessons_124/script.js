// Задача 1js.Pm.Enm.Ev

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

let arr = [2, 4, 6, 7];

let result = arr.every(function (elem) {
    return elem > 0;
});

console.log(result);

// Задача 2js.Pm.Enm.Ev

// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

let arr = [2, 4, 6, 7, 9];

let result = arr.every(function (elem, index) {
    return elem * index < 30;
});
console.log(result);