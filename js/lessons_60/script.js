//lessons_60

/*Задача 1
Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.*/

let arr = [1, 2, 3, 4, 5];

for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}
console.log(arr);

/*Задача 2
Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.*/

arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i]--;
}
console.log(arr);

/*Задача 3
Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.*/

arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}
console.log(arr);