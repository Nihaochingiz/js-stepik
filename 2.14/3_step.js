/**
 * Проверяет, является ли сумма цифр числа четной.
 *
 * @param {number} value - Проверяемое число
 * @returns {boolean} true, если сумма цифр четная, иначе false
 */
function magicNumber(value) {
    let sum = 0;
    const arrOfDigits = String(value).split('').map(Number);
    for (i = 0; i < arrOfDigits.length; i++){
        sum += arrOfDigits[i];
    }
    return sum % 2 === 0;
        
}


console.log(magicNumber(1234));
//=> true (1+2+3+4 = 10, 10 четное)
console.log(magicNumber(135));
//=> false (1+3+5 = 9, 9 нечетное)
