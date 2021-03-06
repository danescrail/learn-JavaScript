// Задача 1js.Pm.FP.LCF

// Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа
// и возвращать НОД этих двух чисел.
// При решении задачи старайтесь использовать вспомогательные функции,
// в том числе полученные нами ранее в теоретической части.

function inArray(elem, arr) {
    return arr.includes(elem) != -1;
}

function getGreatestCommonDivisor(arr1, arr2) {

    let result = [];

    for (let elem of arr1) {
        if (inArray(elem, arr2) == true) {
            result.push(elem);
        }
    }

    for (let elem of arr2) {
        if (inArray(elem, arr1) == true) {
            result.push(elem);
        }
    }

    let number = 0;

    for (let elem of result) {
        if (num_1 % elem == 0 && num_2 % elem == 0) {
            if (number < elem) {
                number = elem;
            }
        }
    }
    return (number);
}



function getDividerNum(num) {
    let result = [];

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }

    return result;
}

let num_1 = 12;
let num_2 = 16;

getGreatestCommonDivisor(getDividerNum(num_1), getDividerNum(num_2));

// Задача 2js.Pm.FP.LCF
// Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми.
// Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.
// Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.

function getSimpleNum(num) {
    let count = 0;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return !count > 0
}

function checkSumplesNum(num1, num2) {
    return (getSimpleNum(num1) == true && getSimpleNum(num2) == true);
}