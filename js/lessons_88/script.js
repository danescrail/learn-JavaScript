// Задача 1js.Pm.FP.PU
// Дана функция, проверяющая числа на простоту:

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

for (i = 1; i < 101; i++) {
    if (isPrime(i) == true) console.log(i);
}

// Задача 2js.Pm.FP.PU
// Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');

// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}

// 	return sum;
// }
// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

function getDigitsSum(num) {
    let sum = 0;
    let digits = String(num).split('');

    for (let digit of digits) {
        sum += Number(digit);
    }

    return sum;
}

for (i = 1; i < 2031; i++) {
    if (getDigitsSum(i) == 13) console.log(i);
}

// Задача 3js.Pm.FP.PU
// Пусть дан какой-то массив с числами, например, такой:

// [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий:

// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:

// let nums = [123, 456, 789];

// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }

// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

let nums = [123, 456, 789];
let result = [];

function strReverse(num) {
    result.push(String(num).split('').reverse().join(''));
}

for (let num of nums) {
    strReverse(num);
}

console.log(result); // выведет [321, 654, 987]

// Задача 4js.Pm.FP.PU
// Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:

// let num1 = 234;
// let num2 = 531;

// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }

// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }

// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }
// В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.

function sumDigits1EquallyDigits2(num1, num2) {

    let digits1 = String(num1).split('');
    let digitsSum1 = 0;
    for (let digit1 of digits1) {
        digitsSum1 += Number(digit1);
    }

    let digits2 = String(num2).split('');
    let digitsSum2 = 0;
    for (let digit2 of digits2) {
        digitsSum2 += Number(digit2);
    }

    if (digitsSum1 == digitsSum2) {
        return ("сумма цифр совпадает");
    } else {
        return ("сумма цифр не совпадает")
    }

}
num1EquallyNum2(123, 111);


// Задача 5js.Pm.FP.PU
// Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль 
// нетривиальные делители этих чисел (то есть исключая число 1 и само число). 
// Некий программист уже написал решение задачи:

// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];

// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(num);
// 		}
// 	}

// 	return result;
// }
//Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. 
//При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.
//Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться,
//что она работает корректно после вашей правки.
//После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.

let nums = [12, 24, 35, 14];

for (let num of nums) {
    console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
    let result = [];

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }

    return result;
}