// Задача 1
// Дан следующий массив:
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (let elem of arr) {
    if (elem == 3) {
        counter++
    }
}
console.log(counter);

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.

arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
counter = 0;

for (let elem of arr) {
    if (elem == 2 || elem == 3) {
        counter++;
    }
}
console.log(counter);

// Задача 3
// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.

let str = "adssfsdfsdfksdosdofdo";
counter = {};

for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (counter[key] == undefined) {
        counter[key] = 1;
    } else {
        counter[key]++;
    }
}
console.log(counter);