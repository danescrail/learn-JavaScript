// Задача 1js.Pm.Dst.Ar

// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, surname, department, position, salary] = arr;
console.log(name);

// Задача 2js.Pm.Dst.Ar

// В следующем коде части массива записываются в соответствующие переменные:

// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

function func() {
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name, surname, department, position, salary] = func();
console.log(name);

// Задача 3js.Pm.Dst.Ar

// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории.

let [, , department, position, , ] = arr;
console.log(department, position);

// Задача 4js.Pm.Dst.Ar

// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2); // все элементы со второго до конца массива
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, ...info] = arr;

// Задача 5js.Pm.Dst.Ar

// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

let name = arr[0];
let surname = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
    position = arr[3];
} else {
    position = 'джуниор';
}

let [name, surname, department, position = "джуниор"] = arr;

console.log(position);

// Задача 6js.Pm.Dst.Ar

// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца
// по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.

let date = [22, 01, 25];
let [year = 22, month = 01, day = 25] = date;
console.log(date);