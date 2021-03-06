// Задача 1
// Дан следующий объект с работниками и их зарплатами:
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// Увеличьте зарплату каждого работника на 10%.

let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let key in obj) {
    obj[key] = obj[key] * 0.1 + obj[key];
}

console.log(obj);

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] = obj[key] * 0.1 + obj[key];
    }
}
console.log(obj);

//  Задача 3
//  Даны следующие массивы:
//  let arr1 = [1, 2, 3, 4, 5];
//  let arr2 = [6, 7, 8, 9, 10];
//  С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let result = {};

for (let i = 0; i < arr1.length; i++) {
    result[arr1[i]] = arr2[i];
}
console.log(result);

// Задача 4
// Дан следующий объект:
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

obj = {
    1: 6,
    2: 7,
    3: 8,
    4: 9,
    5: 10
};
let sum_key = 0;
let sum_value = 0;

for (let key in obj) {
    sum_key = Number(sum_key) + Number(key);
    sum_value = Number(sum_value) + Number(obj[key]);
}
console.log("сумма ключей = " + sum_key + " сумма значений = " + sum_value + " => " + "сумму ключей / сумму значений = " + sum_key / sum_value);

// Задача 5
// Дан следующий объект:
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// Запишите ключи этого объекта в один массив, а значения - в другой.

obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5
};
arr1 = [];
arr2 = [];

for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
}
console.log(arr1, arr2);

// Задача 6
// Дан следующий объект:
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
// let arr = [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];
obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};

let first_num;
arr = [];

for (let key in obj) {
    first_num = String(obj[key]);
    if (first_num[0] == 1 || first_num[0] == 2) {
        Number(first_num)
        arr.push(first_num);
    }
}
console.log(arr);

// Задача 7
// Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

arr = ['a', 'b', 'c', 'd', 'e'];
obj = {};

for (let i = 0, j = 1; i < arr.length; i++, j++) {
    obj[j] = arr[i];
}
arr = obj;
console.log(arr);

// Задача 8
// Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

arr = ['a', 'b', 'c', 'd', 'e'];
obj = {};

for (let i = 0, j = 1; i < arr.length; i++, j++) {
    obj[arr[i]] = j;
}

console.log(obj);