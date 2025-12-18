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
     * Загружает файл для премиум пользователей
     *
     * Примечание: сервис загрузки нестабилен, может потребоваться до трех попыток
     *
     * @param {string} filename - имя файла для загрузки
     * @param {string} content - содержимое файла
     * @returns {Promise<void>} разрешается при успешной загрузке
     */
    upload(filename, content) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            const maxAttempts = 3;
            
            const tryUpload = () => {
                attempts++;
                
                this.api.upload(filename, content, (error) => {
                    if (error) {
                        // Если есть ошибка и остались попытки - пробуем снова
                        if (attempts < maxAttempts) {
                            tryUpload();
                        } else {
                            // Если исчерпали все попытки - отклоняем с последней ошибкой
                            reject(error);
                        }
                    } else {
                        // Успешная загрузка
                        resolve();
                    }
                });
            };
            
            // Начинаем первую попытку
            tryUpload();
        });
    }
}