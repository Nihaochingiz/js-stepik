/**
 * Возвращает идеально упорядоченную колоду от большего к меньшему.
 *
 * @param {number[]} deck - перемешанная колода
 *
 * @returns {number[]} упорядоченная по убыванию колода
 */
function descendingOrder(deck) {
  deck.sort((a,b) => b - a);
  return deck;
}


const deck = [3, 8, 1, 9, 4, 6, 2];
console.log(descendingOrder(deck));
