/**
 * Удаляет книгу из каталога.
 *
 * @param {Record<string, number>} bookCatalog каталог книг
 * @param {string} bookTitle название книги
 * @returns {Record<string, number>} обновленный каталог книг
 */
function removeBook(bookCatalog, bookTitle) {
    delete bookCatalog[bookTitle];
    return bookCatalog;
}