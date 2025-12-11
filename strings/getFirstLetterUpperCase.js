/**
 * Вспомогательная функция для получения первой буквы в заглавном регистре
 *
 * @param {string} text - имя читателя
 * @returns {string} заглавная буква
 */
function getFirstLetterUppercase(text) {
  return text.trim().charAt(0).toUpperCase();
}
console.log(getFirstLetterUppercase('Anna'));
console.log(getFirstLetterUppercase('john'));