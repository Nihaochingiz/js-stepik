/**
 * Перемещает первую и последнюю карты в середину колоды.
 *
 * @param {number[]} deck - массив карт
 *
 * @returns {number[]} колода с первой и последней картами, перемещенными в середину
 */
function moveEndsToMiddle(deck) {
  if (deck.length < 4) {
    return deck;
  }

  const firstCard = deck[0];
  const lastCard = deck.at(-1);

  const midPart = deck.slice(1, deck.length - 1);
  const midIndex = Math.floor(midPart.length / 2);

  midPart.splice(midIndex, 0, firstCard, lastCard);
  return midPart;
}