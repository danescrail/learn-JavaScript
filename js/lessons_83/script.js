// Задача 1js.Pm.UF.Pr
// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

function cube(num) {
    num = num ** 3;
    console.log(num);
}
cube(2);

// Задача 2js.Pm.UF.Pr
// Сделайте функцию, которая параметром принимает число и проверяет, 
// положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

function analize(num) {
    if (num < 0) {
        console.log("---");
    } else {
        console.log("+++");
    }
}

// Задача 3js.Pm.UF.Pr
// Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

function sum(num1, num2, num3) {
    sum = num1 + num2 + num3;
    console.log(sum);
}

// Задача 4js.Pm.UF.Pr
// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.

let param1 = 1;
let param2 = 2;
let param3 = 3;

function sum(num1, num2, num3) {
    sum = num1 + num2 + num3;
    console.log(sum);
}
sum(param1, param2, param3);

// Задача 5js.Pm.UF.Pr
// Дана функция:

// function func(num = 5) {
// 	alert(num * num);
// }
// Эта функция вызывается следующим образом:

// func(2);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

function func(num = 5) {
    alert(num * num);
}

func(2); // 4
func(3); // 9
func(); // 5 * 5 = 25;

// Задача 6js.Pm.UF.Pr
// Дана функция:

// function func(num1 = 0, num2 = 0) {
// 	alert(num1 + num2);
// }
// Эта функция вызывается следующим образом:

// func(2, 3);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

function func(num1 = 0, num2 = 0) {
    alert(num1 + num2);
}

func(2, 3);
func(3);
func();