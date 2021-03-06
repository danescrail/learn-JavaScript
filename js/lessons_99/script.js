function isLucky(num) {
    let str = String(NormalizeNum(num));

    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    return sum1 == sum2;
}

function NormalizeNum(num) {
    let str = String(num);

    if (str.length == 5) {
        str += "0";
    } else if (str.length == 4) {
        str += "00";
    } else if (str.length == 3) {
        str += "000";
    } else if (str.length == 2) {
        str += "0000";
    };

    return str;
}

isLucky(123321);


//Задача 3

function formStr(data, length) {
    let str = String(data);

    for (let i = str.length; i < length; i++) {
        str = "0" + str;
    }
    return str;
}




// Задача 4js.Pm.FP.ALLT

// Возьмите код функции normalizeNum:

// function normalizeNum(num, digitsAmount) {
// 	let str = String(num);
// 	return formStr('0', digitsAmount - str.length) + str;
// }
// Возьмите написанную вами функцию formStr и потестируйте работу функции normalizeNum, например, вот так:

// function normalizeNum(num, digitsAmount) {
// 	let str = String(num);
// 	return formStr('0', digitsAmount - str.length) + str;
// }

// function formStr(data, length) {
// 	// написанный вами код
// }

// console.log(normalizeNum(123, 6)); // выведет '000123'
// console.log(normalizeNum(1234, 6)); // выведет '001234'
// console.log(normalizeNum(12345, 6)); // выведет '012345'
// console.log(normalizeNum(123456, 6)); // выведет '123456'

function isLucky(num) {
    let str = NormalizeNum(String(num));
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0, j = str.length / 2; i < str.length / 2; i++, j++) {
        sum1 += Number(str[i]);
        sum2 += Number(str[j]);
    }

    return sum1 == sum2;
}

function normalizeNum(num, digitsAmount) {
    let str = String(num);
    return formStr('0', digitsAmount - str.length) + str;
}

function formStr(data, length) {
    let str = String(data);

    for (let i = str.length; i < length; i++) {
        str = "0" + str;
    }
    return str;
}

console.log(isLucky(normalizeNum(1203, 4)));

// Задача 5js.Pm.FP.ALLT
// Потестируйте совместную работу функций normalizeNum и isLucky, например, вот так:

// console.log(isLucky(normalizeNum(1203, 4)));   // выведет true
// console.log(isLucky(normalizeNum(312, 4)));    // выведет true

// console.log(isLucky(normalizeNum(6123, 6)));   // выведет true
// console.log(isLucky(normalizeNum(600123, 6))); // выведет true

// console.log(isLucky(normalizeNum(700123, 6))); // выведет false
// console.log(isLucky(normalizeNum(70123, 6)));  // выведет false

// Задача 6js.Pm.FP.ALLT

// Сделайте функцию getLast, которая параметром будет принимать число цифр в билете и возвращать число,
// соответствующее концу цикла. Потестируйте эту функцию на различных значениях.

// Задача 6js.Pm.FP.ALLT

// Сделайте функцию getLast, которая параметром будет принимать число цифр в билете и возвращать число,
// соответствующее концу цикла. Потестируйте эту функцию на различных значениях.

// Задача 7js.Pm.FP.ALLT

// Сделайте функцию getFirst, которая параметром будет принимать число цифр в билете и возвращать число,
// соответствующее началу цикла. Потестируйте эту функцию на различных значениях.

// Давайте для начала выпишем соответствия между количеством цифр в билете и началом цикла:
// 4 - 101, 6 - 1001, 8 - 10001, 10 - 100001 и так далее. Самостоятельно определите логику,
// по которой формируются данные числа.


function isLucky(num) {
    let str = NormalizeNum(String(num));
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0, j = str.length / 2; i < str.length / 2; i++, j++) {
        sum1 += Number(str[i]);
        sum2 += Number(str[j]);
    }

    return sum1 == sum2;
}

function normalizeNum(num, digitsAmount) {
    let str = String(num);
    return formStr('0', digitsAmount - str.length) + str;
}

function formStr(data, length) {
    let str = String(data);

    for (let i = str.length; i < length; i++) {
        str = "0" + str;
    }
    return str;
}

function getLast(num) {
    let str = String(num);
    let result = "";

    for (let i = 0, k = 9; i < str.length; i++) {
        result += 9;
    }
    return Number(result);
}

function getFirst(num) {
    let result = "";

    for (let i = 2; i < num; i += 2) {
        result += "0";
    }
    result = 1 + result + 1;
    return Number(result);
}

function getLuckyTickets(digitsAmount) {
    let result = [];

    let first = getFirst(digitsAmount);
    let last = getLast(digitsAmount);

    for (let i = first; i <= last; i++) {
        let ticketNum = normalizeNum(num, digitsAmount);

        if (isLucky(ticketNum)) {
            result.push(ticketNum);
        }
    }

    return result;
}

getLuckyTickets(10000);