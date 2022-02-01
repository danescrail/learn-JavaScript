//Заполнение массивов через цикл в JavaScript 59 занятие


/*Задача 1
Объявите пустой массив, а затем заполните его числами от 1 до 10.*/

let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;

console.log(arr);

/*Задача 2
Объявите пустой массив, а затем заполните его 5-ю буквами x. */

arr = [];

arr[0] = "x";
arr[1] = "x";
arr[2] = "x";
arr[3] = "x";
arr[4] = "x";

console.log(arr);

/*Задача 3
С помощью цикла заполните массив числами от 1 до 100. */

arr = [];

for (let i = 0, j = 1; i < 101; i++, j++) {
    arr[i] = j;
}
console.log(arr);

/*Задача 4
С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99. */

arr = [];

for (i = 0, j = 1; j < 100; i++, j += 2) {
    arr[i] = j;
}
console.log(arr);