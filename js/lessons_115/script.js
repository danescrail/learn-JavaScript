// Задача 12js.Pm.FA.IIFE

// Допишите следующий код так, чтобы его запуск алертом выводил '!':

// (function() {
// 	// какой-то код
// })()()();

(function () {
    return function () {
        return function () {
            alert("!");
        }
    }
})()()();

// Задача 13js.Pm.FA.IIFE

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

// (function() {
// 	// какой-то код
// })(1)(2);

(function (num1) {
    return function (num2) {
        alert(num1 + num2);
    }
})(1)(2);

// Задача 14js.Pm.FA.IIFE

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

// (function() {
// 	// какой-то код
// })(1)(2)(3);

(function (num1) {
    return function (num2) {
        return function (num3) {
            alert(num1 + num2 + num3);
        }
    }
})(1)(2)(3);