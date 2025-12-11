/**
 * Вспомогательная функция для получения последней буквы в строчном регистре (без пробелов)
 *
 * @param {string} text - фамилия читателя
 * @returns {string} строчная буква
 */
function getLastLetterLowercase(text) {
    const trimmedText = text.trim()
    return trimmedText.slice(-1).toLowerCase();
}
console.log(getLastLetterLowercase('Петрова'));
console.log(getLastLetterLowercase('Smith'));