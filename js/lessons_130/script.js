// Задача 1js.Pm.Osr.SRAp

// Напишите функцию, которая будет принимать параметрами произвольное
// количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

function func(...nums) {
    let sum = 0;
    let numLength = 0;

    for (let num of nums) {
        sum += num;
        numLength++;
    }

    return sum / numLength;
}

func(1, 2, 3, 4)