// Задача 1js.Pm.FA.FRF

// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1.
// Сделайте аналогичную функцию func2, возвращающую число 2.
// Найдите сумму результатов этих функций.

let func1 = function func1() {
    return function() {
        return 1;
    }
}

let func2 = function func2() {
    return function() {
        return 2;
    }
}

console.log(func1()() + func2()());

// Задача 2js.Pm.FA.FRF
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

function func(){
    return function(){
        return function(){
            return function(){
                return function(){
                    return console.log("!");
                }
            }
        }
    }
}

// Задача 3js.Pm.FA.FRF
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

function func(num1){
    return function(num2){
        return function(num3){
            console.log(num1 + num2 + num3);
        }
    }
}

// Задача 4js.Pm.FA.FRF
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(elem1){
    let arr = [];
    arr.push(elem1);
    return function (elem2){
        arr.push(elem2);
        return function (elem3){
            arr.push(elem3);
            return function (elem4){
                arr.push(elem4);
                return function (elem5){
                    arr.push(elem5);
                    return arr;
                }
            }
        }
    }
}