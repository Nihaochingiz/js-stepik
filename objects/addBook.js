/**
 * Добавляет книгу в каталог.
 *
 * @param {Record<string, number>} bookCatalog каталог книг
 * @param {string} bookTitle название книги
 * @param {number} stock количество экземпляров
 * @returns {Record<string, number>} обновленный каталог книг
 */
function addBook(bookCatalog, bookTitle, stock) {
    bookCatalog[bookTitle] = stock;
    return bookCatalog;
}


console.log(addBook({ 'Преступление и наказание': 3 }, 'Мастер и Маргарита', 7));