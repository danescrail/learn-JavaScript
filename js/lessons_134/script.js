// Задача 1js.Pm.Dst.Fn

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func(employee) {
    console.log(employee);
}

func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

// Задача 2js.Pm.Dst.Fn

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([name, surname, ...info]) {
    console.log(name);
    console.log(surname);
    console.log(info);
}

func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

// Задача 3js.Pm.Dst.Fn

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];

// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

// func( ['Иван', 'Иванов', 'отдел разработки'] );

function func([name, surname, department, position = "джуниор"]) {
    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
}

func(['Иван', 'Иванов', 'отдел разработки']);

// Задача 4js.Pm.Dst.Fn

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];

// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }

// func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );

function func(department, [name, surname], [year, month, day]) {
    console.log(department);
    console.log(name);
    console.log(surname);
    console.log(year);
    console.log(month);
    console.log(day);
}

func('отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31]);

// Задача 5js.Pm.Dst.Fn

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }

// func( {color: 'red', width: 400, height: 500} );

function func({
    color,
    width,
    height
}) {
    console.log(color);
    console.log(width);
    console.log(height);
}

func({
    color: 'red',
    width: 400,
    height: 500
});

// Задача 6js.Pm.Dst.Fn

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;

// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

// func( {color: 'red', width: 400, height: 500} );

function func({
    color = "black",
    width,
    height
}) {
    console.log(color);
    console.log(width);
    console.log(height);
}

func({
    color: 'red',
    width: 400,
    height: 500
});