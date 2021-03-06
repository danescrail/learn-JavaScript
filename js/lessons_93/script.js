// Разность массивов getDiff - поиск разности и ее вывод, inArray - поиск элементов

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

function inArray(elem, arr) {
    return arr.includes(elem);
}

function getDiff(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (inArray(elem, arr2)) {} else {
            result.push(elem);
        }
    }

    for (let elem of arr2) {
        if (inArray(elem, arr1)) {} else {
            result.push(elem);
        }
    }
    return result;
}

getDiff(arr1, arr2);
getDiff(arr2, arr1);