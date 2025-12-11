/**
 * Вспомогательная функция для получения первых двух букв в заглавном регистре
 *
 * @param {string} text - имя читателя
 * @returns {string} первые две буквы в заглавном регистре
 */
function getGenrePrefix(text) {
    const trimmedText = text.trim()
    return trimmedText.substring(0,2).toUpperCase();
}

console.log(getGenrePrefix('фантастика'))