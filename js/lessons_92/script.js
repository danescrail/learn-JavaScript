//Вывести пересечение массивов
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

function inArray(elem, arr) {
    return arr.includes(elem);
}

function getInt(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }

    return result;
}