/**
 * Подсчитывает количество карт определенной масти в колоде
 *
 * @param {string[]} deck - массив карт (колода)
 * @param {string} suit - масть для подсчета
 * @returns {number} количество карт указанной масти в колоде
 */
function countCardsBySuit(deck, suit) {
 let count = 0;
 
    deck.forEach( el => {

    if (el === suit) {
        count++;
    }});

    return count;
}

const targetSuit = 'hearts';
console.log(countCardsBySuit(["hearts", "spades", "hearts", "clubs"], targetSuit));
