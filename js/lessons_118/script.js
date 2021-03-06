// Задача 1js.Pm.FA.AF

// Дана следующая функция с коллбэком:

// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

let result = every([1, 2, 3, 4, 5], (elem) => {
	return elem > 0;
});



// Задача 2js.Pm.FA.AF

// Дана следующая функция с коллбэком:

// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

let result = every([1, 2, 3, 4, 5], (elem, index) => {
	return elem * index > 10;
});

// Задача 3js.Pm.FA.AF

// Дана следующая функция с коллбэком:

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = each(arr, function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

let result = each(arr, (elem, index) => {
	return elem * index > 10;
});