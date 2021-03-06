// Задача 1js.Pm.UF.Rt

// Сделайте функцию, которая параметром принимает число, а 
// возвращает куб этого числа. С помощью этой функции найдите куб числа 3
// и запишите его в переменную result.

function cube(num = 0) {
    return num ** 3;
}

let result = cube(3);
console.log(result);

// Задача 2js.Pm.UF.Rt
// Сделайте функцию, которая параметром принимает число,
// а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
//  Просуммируйте полученные результаты и выведите их на экран.

function numbers(num) {
    return Math.sqrt(num);
}

let sum = numbers(3) + numbers(4);
console.log(sum);

// Задача 3js.Pm.UF.Rt
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

let result = round(sqrt(2));
console.log(result);

// Задача 4js.Pm.UF.Rt
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

let result = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(result);

// Задача 5js.Pm.UF.Rt
// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result
// записывалась дробь, округленная до 3-х знаков в дробной части.

function round(num) {
    return num.toFixed(3);
}

let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(result);


// Задача 9js.Pm.UF.Rt
// Что выведется на экран в результате выполнения следующего кода:
// function func(num) {
// 	let sum = 0;	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// alert( func(5) );
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

function func(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

alert(func(5));

// Задача 10js.Pm.UF.Rt
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз,
// пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое
// потребовалось для достижения результата.

function count(num = 0) {
    let count = 0;
    for (let i = 2; num >= 10; num = num / 2) {
        count++;
    }
    return (count);
}
count(200);

// Задача 11js.Pm.UF.Rt
// Дана следующая функция:

// function func(num1, num2) {
// 	let result;

// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}

// 	return result;
// }

// alert(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории.

function func(num1, num2) {
    let result;

    if (num1 > 0 && num2 > 0) {
        return num1 * num2;
    } else {
        return num1 - num2;
    }
}

alert(func(3, 4));