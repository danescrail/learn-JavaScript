// Задача 1js.Pm.Tm.DSC

// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

// let date1 = '2020-11-31';
// let date2 = '2020-12-01';

let date1 = '2020-11-31';
let date2 = '2020-12-01';

if (date1 > date2) console.log(date1);
else console.log(date2);

// Задача 2js.Pm.Tm.DSC

// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

// let date1 = '09-21';
// let date2 = '09-23';

let date1 = '09-21';
let date2 = '09-23';

if (date1 > date2) console.log(date1);
else console.log(date2);

// Задача 3js.Pm.Tm.DSC

// Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.

let date = "02.03";


if (date >= "03.21" && date <= "04.19") {
    console.log("овен");
};
if (date >= "04.20" && date <= "05.20") {
    console.log("телец");
};
if (date >= "05.21" && date <= "06.20") {
    console.log("близнецы");
};
if (date >= "06.21" && date <= "07.22") {
    console.log("рак");
};
if (date >= "07.23" && date <= "08.22") {
    console.log("лев");
};
if (date >= "08.23" && date <= "09.22") {
    console.log("дева");
};
if (date >= "09.23" && date <= "10.22") {
    console.log("весы");
};
if (date >= "10.23" && date <= "11.21") {
    console.log("скорпион");
};
if (date >= "11.22" && date <= "12.21") {
    console.log("стрелец");
};
if (date >= "12.22" && date <= "19.01") {
    console.log("козерог");
};
if (date >= "01.20" && date <= "02.18") {
    console.log("водолей");
};
if (date >= "02.19" && date <= "03.20") {
    console.log("рыбы");
};