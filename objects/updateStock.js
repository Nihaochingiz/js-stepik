/**
 * Увеличивает количество экземпляров книги на указанное количество.
 *
 * @param {Record<string, number>} bookCatalog каталог книг
 * @param {string} bookTitle название книги
 * @param {number} additionalStock дополнительное количество экземпляров
 * @returns {Record<string, number>} обновленный каталог книг
 */
function updateStock(bookCatalog, bookTitle, additionalStock) {
    if (bookCatalog[bookTitle] !== undefined) {
        bookCatalog[bookTitle] += additionalStock;
    }
    return bookCatalog;
}