/**
 * Подсчитывает количество карт больше или меньше/равно заданного значения
 *
 * @param {number[]} deck - массив значений карт (колода)
 * @param {number} threshold - пороговое значение для сравнения
 * @param {boolean} isGreater - тип сравнения (true - больше, false - меньше или равно)
 * @returns {number} количество карт, удовлетворяющих условию сравнения
 */
function countCardsByComparison(deck, threshold, isGreater) {
    let count = 0;
    
    for (const card of deck) {
        if (isGreater) {

            if (card > threshold) {
                count++;
            }
        } else {
            
            if (card <= threshold) {
                count++;
            }
        }
    }
    
    return count;
}


console.log(countCardsByComparison([1, 5, 7, 3, 9, 2], 5, true)); // 2