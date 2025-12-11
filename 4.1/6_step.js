/** @type {string[]} **/
const JOKERS = ["red_joker", "black_joker"];

/**
 * Вставить джокеров в колоду карт
 *
 * @param {number[]} deck - колода карт
 *
 * @returns {(string|number)[]} новая колода с джокерами
 */
function insertJokers(deck) {
  if (deck.length === 0) {
    const result = new Array(3);
    result[1] = "red_joker";
    result[2] = "black_joker";
    return result;
  }

  return [deck[0], ...JOKERS, ...deck.slice(1)];
}
