// Задача 1js.Pm.Lp.SAAF
// С помощью цикла сформируйте следующий массив:

// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let arr = [];
let str = "";

for (let i = 1; i <= 5; i++) {
    str += "xx"
    arr.push(str)
}
console.log(arr);

// Задача 2js.Pm.Lp.SAAF
// С помощью цикла сформируйте следующий массив:

// ['11111', '22222', '33333', '44444', '55555']

arr = [];
str = "";

for (let i = 1; i <= 5; i++) {
    str = "";

    for (let j = 1; j < 6; j++) {
        str += String(i);
    }
    arr.push(str);
}
console.log(arr);