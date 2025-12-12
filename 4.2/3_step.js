/**
 * Определить, содержится ли результат в наборе
 *
 * @param {number[]} results - массив результатов бросков костей
 * @param {number} result - искомый результат
 *
 * @returns {boolean} true если результат есть в наборе, false в противном случае
 */
function isIncludeResult(results, result) {
    const hasResult = results.includes(result);
    return hasResult;
}


const result = 5;
console.log(isIncludeResult([2, 5, 1, 6], result));

