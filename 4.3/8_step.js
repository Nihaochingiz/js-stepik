/**
 * Переставляет колоду так, что каждая вторая карта перемещается в начало.
 *
 * @param {number[]} deck - массив карт
 *
 * @returns {number[]} переставленная колода
 */
function everySecond(deck) {
  const secondCards = []; 
  const firstCards = []; 

  for (let i = 0; i < deck.length; i++) {
    if (i % 2 === 1) {
      secondCards.push(deck[i]);
    } else {
      firstCards.push(deck[i]);
    }
  }
  return secondCards.concat(firstCards);
}
