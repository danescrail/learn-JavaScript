// Задача 1js.Pm.FA.CIIFE

// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.

let func = function () {
    let num = 1;

    return function () {
        alert(num);
        num++;
    }
}();
func();

// Задача 2js.Pm.FA.CIIFE

// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

let func = function () {
    let num = 1;

    return function () {
        let count = 0;

        for (let i = num; i < 6; i++) {
            console.log(i);
            if (i == 5 && count <= 2) {
                i = 0;
                count++;
            }
        }
        return console.log("отсчет окончен");
    }
}();
func();