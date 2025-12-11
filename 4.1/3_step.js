/**
 * Получить вторую карту из колоды
 *
 * @param {number[]} deck - колода карт
 *
 * @returns {number} вторая карта в колоде
 */
function getSecondCard(deck) {
    const [,secondCard] = deck;
    return secondCard;
}

const deck = [1, 8, 5, 3, 6];
getSecondCard(deck);
console.log(getSecondCard(deck));