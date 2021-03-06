// Задача 1js.Pm.SM.Prm
// Преобразуйте последнюю букву строки в верхний регистр.

let str = "london";
let result = str.slice(0, str.length - 1) + str.slice(str.length - 1).toUpperCase();

console.log(result);

// Задача 2js.Pm.SM.Prm
// Преобразуйте первые 2 буквы строки в верхний регистр.

let str = "london";
let result = str.slice(0, 2).toUpperCase() + str.slice(2);

console.log(result);

// Задача 3js.Pm.SM.Prm
// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:

// let str = 'London';
// Преобразуйте первую букву строки в нижний регистр.

let str = 'London';
let result = str.slice(0, 1).toLowerCase() + str.slice(1);

console.log(result);


// Задача 4js.Pm.SM.Prm
// Самостоятельно, не подсматривая в мой код, повторите мое решение описанной задачи.

let str = 'word1 word2 word3';
let word = str.split(" ");

for (let elem of word){
    elem = elem.slice(0, 1).toUpperCase + elem.slice(1);
}

// Задача 5js.Pm.SM.Prm
// Преобразуйте строку 'var_test_text' в 'VarTestText'.

// Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).

let str = "var_test_text";
let word = str.split("_");
let text = "";

for (let elem of word){
    elem = elem.slice(0, 1).toUpperCase() + elem.slice(1);
    text += elem;
}

// Задача 6js.Pm.SM.Prm
// Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.

let str = "Var_Test_Text";
let word = str.split("_");
let text = "";

for (let elem of word){
    elem = elem.slice(0, 1).toLowerCase() + elem.slice(1);
    text += elem;
}

// Задача 7js.Pm.SM.Prm
// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.


let str = 'азбука';
let result = str.split('').reverse().join('');
console.log(result);