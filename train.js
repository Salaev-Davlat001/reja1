console.log("Train task ishga tushdi")
/*

**************************************************************************************
3- TASK:

Asynchron fuksiyaning strukturasi:

//DEFINE

async function myAsyncFunction(age) {
if (typeof age !=== "number") throw new Error ("Should be a number");
else if(age > 60) return list[5];
}

//CALL
getAdviceAsync(35)
.then((data) => {
    console.log ("data:", data) 
    });
.catch ((err) => {
    console.log("ERROR:", err)
})
*******************************************************************************************


2-TASK: 

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
******************************************************************************************************

// 1- Task
/*MITASK’larni train.js fileda yozasiz!

yozish tartibingiz:

Masalani izohi
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak boladi.
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
