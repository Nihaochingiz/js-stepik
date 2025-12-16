/**
 * Возвращает список уникальных авторов в коллекции.
 *
 * @param {string[]} bookCollection - коллекция книг
 * @returns {string[]} список авторов
 */
function listAuthors(bookCollection) {
  const authorsSet = new Set();

  for (const book of bookCollection) {
    const parts = book.split(" - ");

    if (parts.length > 1) {
      const author = parts[1];
      authorsSet.add(author);
    }
  }

  return Array.from(authorsSet);
}
