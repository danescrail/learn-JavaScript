// Задача 1js.Pm.FA.Rc

// Дан массив:

// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива на экран.
let i = 0;

function func(arr) {
    console.log(arr[i]);
    i++;

    if (i < arr.length) {
        func(arr);
    }
}
func([1, 2, 3, 4, 5]);

// Задача 2js.Pm.FA.Rc

// Дан массив:

// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let i = 0;
let sum = 0;

function cube(arr) {
    sum = sum + arr[i] ** 2;
    i++;

    if (i < arr.length) {
        cube(arr);
    } else {
        console.log(sum);
    }
}
cube(arr);