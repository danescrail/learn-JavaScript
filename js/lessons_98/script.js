// Задача 1js.Pm.FP.LT
// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

function isLucky(num) {
    let str = String(NormalizeNum(num));

    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    return sum1 == sum2;
}

function NormalizeNum(num) {
    let str = String(num);

    if (str.length == 5) {
        str += "0";
    }
    if (str.length == 4) {
        str += "00";
    }

    return str;
}