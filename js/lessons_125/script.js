// Задача 1js.Pm.Enm.Sm

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

let arr = [0, -1, -2, -3];

let result = arr.some(function (elem) {
    return elem > 0;
});

console.log(result);
// Задача 2js.Pm.Enm.Sm

// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

let arr = [1, 2, 3, 4, 5, 6, 7];

let result = arr.some(function (elem, index) {
    return elem * index > 30;
});

console.log(result);