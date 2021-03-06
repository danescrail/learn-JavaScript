// Задача 1js.Pm.Md.MAI
// Дан двухмерный массив с числами:
// let arr = [[1, 2, 3], [4, 5], [6]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sum = 0;

for (let subArr of arr) {
    for (let elem of subArr) {
        sum += elem;
    }
}

console.log(sum);

// Задача 2js.Pm.Md.MAI
// Дан трехмерный массив с числами:
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
sum = 0;

for (let subArr1 of arr) {
    for (let subArr2 of subArr1) {
        for (let elem of subArr2) {
            sum += elem;
        }
    }
}
console.log(sum);

// Задача 3js.Pm.Md.MAI
// Решите предыдущие две задачи через цикл for.

arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(sum);

arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[j].length; k++) {
            sum += arr[i][j][k]
        }
    }
}

console.log(sum);