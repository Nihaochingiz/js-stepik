
/**
 * Удаляет все карты из колоды, кроме четверок.
 *
 * @param {number[]} deck - массив карт
 *
 * @returns {number[]} колода, содержащая только четверки
 */
function onlyFours(deck) {
  return deck.filter(card => card === 4)
}
const deck = [1, 4, 3, 4, 8, 4];
console.log(onlyFours(deck));