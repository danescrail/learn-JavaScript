// Задача 1
// Выведите на экран следующую пирамидку:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx
let str = "";

for (i = 2; i < 11; i += 2){
    str += "xx";
    console.log(str);
}

// Задача 2js.Pm.Lp.PLC
// Выведите на экран следующую пирамидку:

// 1
// 333
// 55555
// 7777777
// 999999999

for (let i = 1; i <= 9; i += 2){
    for (let j = 1; j <= i; j += 1)
        console.log(i);
}

// Задача 3js.Pm.Lp.PLC
// Выведите на экран следующую пирамидку:

// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

let str = "";

for (let i = 10; i >= 2; i -= 2){
    str = "";
    for (let j = 0; j <= i; j += 2){
    str += "xx"
    }
    console.log(str);
}

// Задача 4js.Pm.Lp.PLC
// Выведите на экран следующую пирамидку:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

 str = "";

 for (let i = 9; i >= 0; i--){

     str = "";
     
    for (let j = i; j > 0; j--){

         str += String(i);
     
    }
    
     console.log(str);
 }