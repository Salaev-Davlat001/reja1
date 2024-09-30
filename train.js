console.log("Train task ishga tushdi")

console.log("Jack ma maslahatlari")
const list = [
    "be a good student", // 0-20
    "follow a right boss and do a lot of mistakes" ,// 20-30
    "work on yourself", // 30-40
    "do what you are good at", // 40-50
    "invest in youth" , // 50-60
    "have a rest ,you are over", // 60
];

function maslahatBering (a, callback) {
    if (typeof a !== "number") callback ("insert a number",  null);
    else if (a <= 20) callback (null, list[0]);
    else if (a > 20 && a <=30) callback (null, list[1]);
    else if (a > 30 && a <=40) callback (null, list[1]);
    else if (a > 40 && a <=50) callback (null, list[1]);
    else if (a > 50 && a <=60) callback (null, list[1]);
}
maslahatBering(10, (err, data) => {
    if (err) console.log("ERROR:", err);
    else{
        console.log("javob:", data)
    }
})
//B Task
/*
B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countDigits(str) {
    // raqamlarni sanash uchun hisoblagich
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // agar belgilar raqam bo'lsa, sanaymiz
        if (!isNaN(str[i]) && str[i] !== " ") {
            count++;
        }
    }
    return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9")); // 7
console.log(countDigits("123abc456def")); // 6
console.log(countDigits("no digits here!")); // 0
*/
// A Task
/*MITASK’larni train.js fileda yozasiz!

yozish tartibingiz:

Masalani izohi
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi:
Qilgan Yechimingiz…


agarda npm run train deganimda train.js ishga tushmasa yengilgina “FAIL” bo’lasiz!

function countLetter(letter, word) {
    // So'zda harfning nechta marta uchrashini hisoblaymiz
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log(countLetter("e", "engineer")); // 3
console.log(countLetter("n", "engineer")); // 2
*/
