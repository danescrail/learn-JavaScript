// Задача 1js.Pm.FA.FO

// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
//С помощью созданных функций выведите на экран сумму возвращаемых чисел.

let obj = {
    func1: function () {
        return 1
    },
    func2: function () {
        return 2
    },
    func3: function () {
        return 3
    }
}

console.log(obj["func1"]() + obj["func2"]() + obj["func3"]());

// Задача 2js.Pm.FA.FO

// Переберите созданный объект циклом и выведите результаты работы функций на экран.

for (let func in obj) {
    console.log(obj[func]());
}

// Задача 3js.Pm.FA.FO

// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
// Сделайте так, чтобы первая функция возвращала сумму элементов массива,
// вторая функция - сумму квадратов, а третья - сумму кубов.
let arr = [1, 2, 3, 4, 5];

let math = {
    func1: function (arr) {
        let result = 0;

        for (let elem of arr) {
            result += elem;
        }

        return result;
    },
    func2: function (arr) {
        let result = 0;

        for (let elem of arr) {
            result = result + elem ** 2;
        }

        return result;
    },
    func3: function (arr) {
        let result = 0;

        for (let elem of arr) {
            result = result + elem ** 3;
        }

        return result;
    }
}
console.log(math.func3(arr));