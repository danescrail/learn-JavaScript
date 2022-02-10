// Задача 1js.Pm.Dst.Ob

// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let {
    color,
    width,
    height
} = options;

// Задача 2js.Pm.Dst.Ob

// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let {
    color: c,
    width: w,
    height: h
} = options;

// Задача 3js.Pm.Dst.Ob

// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let options = {
    width: 400,
    height: 500,
};

let {
    color = "black", width, height
} = options;

// Задача 4js.Pm.Dst.Ob

// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let options = {
    width: 400,
    height: 500,
};

let {
    color: c = "black",
    width: w,
    height: h
} = options;