/**
 * Удаляет книгу из коллекции.
 *
 * @param {string[]} bookCollection - коллекция книг
 * @param {string} book - книга для удаления
 * @returns {string[]} новая коллекция
 */
function deleteBook(bookCollection, book) {
    const bookSet = new Set(bookCollection);

    if (bookSet.has(book)) {
          bookSet.delete(book);
    }

    return Array.from(bookSet);
}



const bookCollection = [
  'Герой нашего времени - Михаил Лермонтов',
  'Мёртвые души - Николай Гоголь',
];
console.log(
  deleteBook(bookCollection, "Герой нашего времени - Михаил Лермонтов")
);
//=> ['Мёртвые души - Николай Гоголь']

console.log(deleteBook(bookCollection, "Дубровский - Александр Пушкин"));
//=> ['Герой нашего времени - Михаил Лермонтов', 'Мёртвые души - Николай Гоголь']
