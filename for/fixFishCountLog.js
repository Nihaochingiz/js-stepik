/**
 * Исправляет ошибку подсчета, увеличивая количество рыб
 * на единицу для каждого третьего дня.
 *
 * @param {number[]} fishPerDay - массив количества рыб за каждый день
 * @returns {number[]} исправленные данные подсчета рыб
 */
function fixFishCountLog(fishPerDay) {
    const correctedLog = [...fishPerDay];
    
    for (let i = 0; i < correctedLog.length; i += 3) {
        correctedLog[i] += 1; 
    }
    
    return correctedLog;
}


const fishPerDay = [3, 8, 2, 5, 7, 1];
console.log(fixFishCountLog(fishPerDay)); // => [4, 8, 2, 6, 7, 1]

// Дополнительные примеры для проверки
console.log(fixFishCountLog([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
// => [2, 2, 3, 5, 5, 6, 8, 8, 9]

console.log(fixFishCountLog([0, 0, 0, 0, 0, 0])); 
// => [1, 0, 0, 1, 0, 0]