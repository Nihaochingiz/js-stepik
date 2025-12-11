/**
 * Разделить колоду пополам
 *
 * @param {number[]} deck - колода карт
 *
 * @returns {[number[], number[]]} массив из двух половин колоды
 */
function splitDeckInHalf(deck) {
  if (!Array.isArray(deck)) {
    return [[], []]
  }

  const middleIndex = Math.ceil(deck.length / 2);

  const firstPart = deck.slice(0, middleIndex);
  const secondPart = deck.slice(middleIndex);
  return [firstPart, secondPart];
}
const deck = [1, 5, 3, 8, 2];
console.log(splitDeckInHalf(deck));
// => [[1, 5, 3], [8, 2]]