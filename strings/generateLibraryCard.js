/**
 * Вспомогательная функция для получения первой буквы в заглавном регистре
 *
 * @param {string} text - имя читателя
 * @returns {string} заглавная буква
 */
function getFirstLetterUppercase(text) {
  return text.trim().charAt(0).toUpperCase();
}

/**
 * Вспомогательная функция для получения последней буквы в строчном регистре (без пробелов)
 *
 * @param {string} text - имя читателя
 * @returns {string} строчная буква
 */
function getLastLetterLowercase(text) {
  const trimmedText = text.trim();
  return trimmedText.slice(-1).toLowerCase();
}

/**
 * Вспомогательная функция для удвоения возраста
 *
 * @param {number} ageValue - возраст читателя
 * @returns {number} удвоенный возраст читателя
 */
function doubleAge(ageValue) {
  return ageValue * 2;
}

/**
 * Вспомогательная функция для получения первых двух букв в заглавном регистре
 *
 * @param {string} text - имя читателя
 * @returns {string} первые две буквы в заглавном регистре
 */
function getGenrePrefix(text) {
  const trimmedText = text.trim();
  return trimmedText.substring(0, 2).toUpperCase();
}

/**
 * Генерирует номер читательского билета на основе данных читателя.
 *
 * @param {string} firstName - имя читателя
 * @param {string} lastName - фамилия читателя
 * @param {number} age - возраст читателя
 * @param {string} favoriteGenre - любимый жанр читателя
 * @returns {string} номер читательского билета в формате "X-x-NN-XX"
 */
function generateLibraryCard(firstName, lastName, age, favoriteGenre) {
  const firstLetterUppercase = getFirstLetterUppercase(firstName);
  const lastLetterLowercase = getLastLetterLowercase(lastName);
  const doubledAge = doubleAge(age);
  const genre = getGenrePrefix(favoriteGenre);
  return `${firstLetterUppercase}-${lastLetterLowercase}-${doubledAge}-${genre}`;
}

console.log(generateLibraryCard('Анна', 'Петрова', 25, 'фантастика'))
// => "А-а-50-ФА"