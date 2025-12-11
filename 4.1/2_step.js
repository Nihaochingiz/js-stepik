/**
 * Получить первую карту из колоды
 *
 * @param {number[]} deck - колода карт
 *
 * @returns {number} первая карта в колоде
 */
function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}
const deck = [3, 7, 2, 9, 4];
console.log(getFirstCard(deck));