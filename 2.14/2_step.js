/**
 * Вычисляет произведение двух чисел, представленных массивами цифр.
 *
 * @param {number[]} array1 - Первый массив цифр
 * @param {number[]} array2 - Второй массив цифр
 * @returns {number} произведение двух чисел
 */
function twoMultiply(array1, array2) {
    // Преобразуем массивы в строки, затем в числа
    const num1 = parseInt(array1.join(''));
    const num2 = parseInt(array2.join(''));
    
    // Умножаем числа
    return num1 * num2;
}



console.log(twoMultiply([2, 5], [1, 2]));
//=> 300
// [2, 5] представляет 25 и [1, 2] представляет 12.
// 25 * 12 = 300
