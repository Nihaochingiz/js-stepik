/**
 * Сервис облачного хранилища файлов
 * Предоставляет базовые и премиум возможности для работы с файлами
 */
class FileStorageService {
    /**
     * Создает новый сервис хранилища
     * @param {ExternalStorageApi} api - внешнее API для хранения файлов
     */
    constructor(api) {
        this.api = api;
    }

    /**
     * Получает файл для бесплатных пользователей
     *
     * - Возвращает содержимое файла, если его можно получить, независимо от целостности
     * - Передает любую ошибку от API хранилища
     *
     * @param {string} filename - имя файла для получения
     * @returns {Promise<string>} содержимое файла
     */
    free(filename) {
        return this.api.fetch(filename)
            .then(result => result.content)
            .catch(error => { throw error; });
    }

    /**
     * Пакетное получение файлов для бесплатных пользователей
     *
     * - Разрешается со всеми файлами (в том же порядке), если все доступны
     * - Отклоняется с первой встреченной ошибкой
     * - Отклоняется с ошибкой BatchIsEmpty, если массив файлов пустой
     *
     * @param {string[]} filenames - массив имен файлов
     * @returns {Promise<string[]>} массив содержимого файлов
     */
    batch(filenames) {
        // Проверяем, что массив не пустой
        if (!filenames || filenames.length === 0) {
            return Promise.reject(new BatchIsEmpty());
        }

        // Создаем промисы для всех файлов
        const promises = filenames.map(filename => 
            this.free(filename)
        );

        // Используем Promise.all для получения всех файлов одновременно
        // Promise.all отклоняется при первой ошибке
        return Promise.all(promises);
    }
}

/**
 * Ошибка, указывающая, что пакетный сервис был вызван без файлов
 * для обработки (пустой массив). Не изменяйте имя этой ошибки.
 */
class BatchIsEmpty extends Error {
    constructor() {
        super('Запрошена пакетная обработка файлов, но в пакете нет файлов.');
    }
}