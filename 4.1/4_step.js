/**
 * Поменять местами первую и вторую карты в колоде
 *
 * @param {number[]} deck - колода карт
 *
 * @returns {number[]} новая колода с переставленными картами
 */
function swapFirstAndSecondCards(deck) {
  if (!Array.isArray(deck) || deck.length < 2) {
    return [...deck]; 
  }

  const [first, second, ...rest] = deck;
  return [second, first, ...rest];
}

const deck = [2, 9, 7, 4, 1];
console.log(swapFirstAndSecondCards(deck));
// => [9, 2, 7, 4, 1]
