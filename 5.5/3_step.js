/**
 * Проверяет, содержит ли коллекция определённую книгу.
 *
 * @param {string[]} bookCollection - коллекция книг
 * @param {string} book - название книги для поиска
 * @returns {boolean} есть ли книга в коллекции
 */
function hasBook(bookCollection, book) {
    const books = [...new Set(bookCollection)];
    for (const bookRecord of books) {

        if (bookRecord === book) {
            return true;
        }
    }
            return false;
}

const bookCollection = [
  "Преступление и наказание - Фёдор Достоевский",
  "Анна Каренина - Лев Толстой",
];
console.log(hasBook(bookCollection, "Анна Каренина - Лев Толстой"));
console.log(hasBook(bookCollection, "Обломов - Иван Гончаров"));
