/**
 * Получить позицию (индекс) результата в данном наборе бросков
 *
 * @param {number[]} results - массив результатов бросков костей
 * @param {number} result - искомый результат
 *
 * @returns {number} позиция результата в наборе
 */
function getResultPosition(results, result) {
  return results.indexOf(result);
}

const result = 4;

console.log(getResultPosition([1, 6, 3, 4], result));
// => 3
