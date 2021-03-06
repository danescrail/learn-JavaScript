// Задача 1js.Pm.FA.RMs

// Дан многомерный объект произвольного уровня вложенности, например, такой:

// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.

function func(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "object") func(obj[key]);
        else console.log(obj[key]);
    }
}

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: 4
    },
    f: {
        g: 5,
        j: 6,
        k: {
            l: 7,
            m: {
                n: 8,
                o: 9
            }
        }
    }
}

func(obj);

// Задача 2js.Pm.FA.RMs

// Дан многомерный массив произвольного уровня вложенности, например, такой:

// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

// [1, 2, 7, 8, 3, 4, 5, 6, 7]

let arr = [1, [2, 7, 8],
    [3, 4, [5, [6, 7]]]
];
let result = [];

function allElementsArr(arr) {
    for (let elem of arr) {
        if (typeof elem == "object") allElementsArr(elem);
        else result.push(elem);
    }

}

allElementsArr(arr);
console.log(result);


// Задача 3js.Pm.FA.RMs

// Дан многомерный объект произвольного уровня вложенности, например, такой:

// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: 4
    },
    f: {
        g: 5,
        j: 6,
        k: {
            l: 7,
            m: {
                n: 8,
                o: 9
            }
        }
    }
};

function func(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] == "object") sum += func(obj[key]);
        else sum += obj[key];
    }

    return sum;
}

func(obj);

// Задача 4js.Pm.FA.RMs

// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:

// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:

// 'abcdefgjk'

let arr = ['a', ['b', 'c', 'd'],
    ['e', 'f', ['g', ['j', 'k']]]
];

function func(arr) {
    let str = "";

    for (let elem of arr) {
        if (typeof elem == "object") str += func(elem);
        else str += elem;
    }

    return str;
}

func(arr);

// Задача 5js.Pm.FA.RMs

// Дан многомерный массив произвольного уровня вложенности, например, такой:

// [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.

let arr = [1, [2, 7, 8],
    [3, 4],
    [5, [6, 7]]
];

function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "object") {
            arr[i] = func(arr[i])
        } else {
            arr[i] = arr[i] ** 2;
        }
    }
    return arr;
}

func(arr);