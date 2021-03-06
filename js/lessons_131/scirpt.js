// Задача 1js.Pm.Osr.ArInt

// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

function getInt(...arrs) {
    let result = [];

    let arr0 = arrs.shift();

    for (let elem of arr0) {
        if (inArrays(elem, arrs)) {
            result.push(elem);
        }
    }

    return result;
}

function inArrays(elem, arrs) {
    for (let arr of arrs) {
        if (!inArray(elem, arr)) {
            return false;
        }
    }

    return true;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
console.log(result);