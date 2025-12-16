
/**
 * Добавляет книгу в коллекцию (если её там ещё нет).
 *
 * @param {string[]} bookCollection - коллекция книг
 * @param {string} book - книга для добавления
 * @returns {string[]} новая коллекция
 */
function addBook(bookCollection, book) {
  const bookSet = new Set(bookCollection);

  if (bookSet.has(book)) {
    return bookCollection;
  }

  bookSet.add(book);

  return Array.from(bookSet);
}



const bookCollection = ['Евгений Онегин - Александр Пушкин'];
console.log(addBook(bookCollection, "Отцы и дети - Иван Тургенев"));
//=> ['Евгений Онегин - Александр Пушкин', 'Отцы и дети - Иван Тургенев']
console.log(addBook(bookCollection, "Евгений Онегин - Александр Пушкин"));
//=> ['Евгений Онегин - Александр Пушкин']
