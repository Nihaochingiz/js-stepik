/**
 * Удаляет дубликаты книг из коллекции.
 *
 * @param {string[]} bookCollection - коллекция книг
 * @returns {string[]} новая коллекция с уникальными записями
 */
function removeDuplicateBooks(bookCollection) {
  const uniqueBooks = [...new Set(bookCollection)];
  return uniqueBooks;
}

const bookCollection = [
  "Война и мир - Лев Толстой",
  "Мастер и Маргарита - Михаил Булгаков",
  "Война и мир - Лев Толстой",
];
console.log(removeDuplicateBooks(bookCollection));
//=> ['Война и мир - Лев Толстой', 'Мастер и Маргарита - Михаил Булгаков']
