// Задача 1js.Pm.SM.St
// Дана строка 'js'. Сделайте из нее строку 'JS'.

let str = "js";

console.log(str.toUpperCase);


// Задача 2js.Pm.SM.St
// Дана строка 'JS'. Сделайте из нее строку 'js'.

let str = "JS";

console.log(str.toLowerCase);

// Задача 3js.Pm.SM.St
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами
// (через substr, substring, slice).

let str = 'я учу javascript!'
let count_words = str.length;

console.log(str.substr(2, [3]) + "-" + str.substr(6, [10]));
console.log(str.substring(2, [5]) + "-" + str.substring(6, [16]));
console.log(str.slice(2, [5]) + "-" + str.slice(6, [16]));


// Задача 4js.Pm.SM.St
// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.

let str = "abcde";

console.log(str.indexOf("c", [0]));

// Задача 5js.Pm.SM.St
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.

let str = "abcde";

if (str.indexOf("a", [0]) != -1) {
    console.log("есть");
} else {
    console.log("нет");
}

// Задача 6js.Pm.SM.St
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

let str = "abcde";

if (str.indexOf("a") == 0) {
    console.log("да");
} else {
    console.log("нет");
}

// Задача 7js.Pm.SM.St
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

let str = "abcdea";

if (str.lastIndexOf("a") == str.length - 1) {
    console.log("да");
} else {
    console.log("нет");
}

// Задача 8js.Pm.SM.St
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.

let str = "http://abcdea";

if (str.indexOf("http://", 0) != -1) {
    console.log("Да");
} else {
    console.log("нет");
}
// Задача 9js.Pm.SM.St
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

let str = "abcde.html";

if (str.lastIndexOf(".html", 5) != -1) {
    console.log("yes");
} else {
    console.log("no");
}

// Задача 10js.Pm.SM.St
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.

let str = "http://abcdea";

console.log(str.startsWith("http://"))

// Задача 11js.Pm.SM.St
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

let str = "abcdea.html"

console.log(str.endsWith(".html"));

// Задача 12js.Pm.SM.St
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

let str = '1-2-3-4-5';
let arr = str.split("-");

console.log(arr);

// Задача 13js.Pm.SM.St
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

let str = "12345";
let arr = str.split("", 5);

console.log(arr);

// Задача 14js.Pm.SM.St
// Дан следующий массив:

// let arr = [1, 2, 3, 4, 5];
// С помощью метода join слейте его в строку '1-2-3-4-5'.

let arr = [1, 2, 3, 4, 5];
let str = arr.join("-");

console.log(str);