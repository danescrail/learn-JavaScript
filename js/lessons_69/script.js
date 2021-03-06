// Задача 1js.Pm.Lp.Prm
// Выведите с помощью цикла столбец чисел от 1 до 100.

for (i = 1; i < 101; i++) {
    console.log(i);
}

// Задача 2js.Pm.Lp.Prm
// Выведите с помощью цикла столбец чисел от 100 до 1.

for (i = 100; i > 0; i--) {
    console.log(i);
}

// Задача 3js.Pm.Lp.Prm
// Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (i = 2; i < 101; i += 2) {
    console.log(i);
}

// Задача 4js.Pm.Lp.Prm
// Заполните массив 10-ю иксами с помощью цикла.

let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = "x";
}
console.log(arr);

// Задача 5js.Pm.Lp.Prm
// Заполните массив числами от 1 до 10 с помощью цикла.

arr = [];

for (let i = 1, j = 0; i < 11; i++, j++) {
    arr[j] = i;
}

console.log(arr);

// Задача 6js.Pm.Lp.Prm
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

arr = [1, 3, 7, -2, -3, 200, 300]

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// Задача 7js.Pm.Lp.Prm
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

arr = [1, 3, 7, -2, -3, 200, 300, 5]
let flag = true;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] == 5) {
        flag = true;
    } else {
        flag = false;
    }
}

if (flag == true) {
    console.log("есть");
} else {
    console.log("нету");
}

// Задача 8js.Pm.Lp.Prm
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

arr = [1, 2, 3, 4, 5];
let sum_arr = 0;

for (let i = 0; i < arr.length; i++) {
    sum_arr += arr[i]
}

console.log(sum_arr);


// Задача 9js.Pm.Lp.Prm
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

arr = [1, 2, 3, 4, 5];
sum_arr = 0;

for (let i = 0; i < arr.length; i++) {
    sum_arr += arr[i] ** 2;
}

console.log(sum_arr);

// Задача 10js.Pm.Lp.Prm
// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

arr = [1, 2, 3, 4, 5];
sum_arr = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    ++count;
    sum_arr += arr[i];
}

console.log(sum_arr / count);

// Задача 11js.Pm.Lp.Prm
// Напишите скрипт, который будет находить факториал числа. 
// Факториал (обозначается !) - это произведение (умножение) всех целых чисел,
//  меньше данного, и его самого. Например, 4! = 1*2*3*4.

num = 4;
let Factorial = 1;

for (let i = num; i > 0; i--) {
    Factorial *= i;
}
console.log(Factorial);