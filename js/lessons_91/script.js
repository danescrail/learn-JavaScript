// Задача 1js.Pm.FP.FrNm
// Реализуйте функцию getOwnDivisors. Потестируйте ее работу.
// getOwnDivisors, которая параметром будет принимать число и возвращать массив собственных делителей этого числа:

function getOwnDivisors(num){
    let result = [];

    for (let i = 1; i < num; i++){
        if (num % i == 0){
            result.push(i);
        }
    }
    
    return result;
}

// Также было бы неплохо иметь функцию getSum, которая параметром будет принимать массив и возвращать сумму элементов этого массива:
// Задача 2js.Pm.FP.FrNm
// Реализуйте функцию getSum. Потестируйте ее работу.

function getSum(arr){
    let sum = 0;

    for (let elem of arr){
        sum += elem;
    }

    return sum;
}

getSum(getOwnDivisors(123));

// Давайте сделаем функцию isFreindly, которая параметром будет принимать два числа и возвращать true,
// если числа дружественные друг с другом и falsе, если нет
// Задача 3js.Pm.FP.FrNm
// Проверьте работу функции isFreindly.

function isFreindly(num1, num2){
    let sum1 = getSum(getOwnDivisors(num1));
    let sum2 = getSum(getOwnDivisors(num2));

    if (num1 == sum2 && num2 == sum1){
        return true;
    } else {
        return false;
    }
}


// Задача 4js.Pm.FP.FrNm
// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке
// и возвращать их в виде двухмерного массива вида следующего вида:

// [ [220, 284], [1184, 1210], [2620, 2924] ]
// С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 3000.

function getFreindly(minRange, maxRange){
    let count = minRange;
    let arr = [];

    for (; minRange < maxRange; count++){
        if (isFreindly(minRange, count)){
            arr.push(minRange, count);
        } else if(count == maxRange){
            minRange++;
            count = minRange;
        }
    }
    return arr;
}

function getFreindly(num){
    let arr = [];
    let sum = getSum(getOwnDivisors(num));
    if (getFriendly(num, sum) == true){
        arr.push(num, sum);
    }
    return arr;
}


// Задача 5js.Pm.FP.FrNm
// Совершенное число - целое число, равное сумме всех своих собственных делителей
// (то есть всех положительных делителей, отличных от самого числа).
// Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне.
// Проверьте работу функции в промежутке от 1 до 1000.


function getDel(num){
    let sum = 0;

    for (let i = 1; i < num; i++){
        if (num % i == 0){
            sum += i;
        }
    }
    if (sum == num){
        return true;
    } else {
        return false;
    }
}

function getPerfect(startNum, lastNum){
    let arr = [];

    for (let i = startNum; i < lastNum; i++){
        if (getDel(i) === true){
            arr.push(i);
        }
    }
    return arr;
}
