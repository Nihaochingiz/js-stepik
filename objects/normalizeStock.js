/**
 * Нормализует количество книг с помощью предоставленной функции нормализации.
 *
 * @param {Object} params параметры для выполнения нормализации
 * @param {number} params.stock количество экземпляров книги
 * @param {Function} params.normalizeFunction функция нормализации
 * @returns {number} нормализованное количество
 */
function normalizeStock(params) {
    return params.normalizeFunction(params.stock);
}