/**
 * Применяет еженедельное пополнение - добавляет 2 экземпляра для каждой книги в каталоге.
 *
 * @param {Record<string, number>} bookCatalog каталог книг
 * @returns {Record<string, number>} обновленный каталог книг
 */
function applyWeeklyRestock(bookCatalog) {
    for (const bookTitle in bookCatalog) {
        bookCatalog[bookTitle] += 2;
    }
    return bookCatalog;
}