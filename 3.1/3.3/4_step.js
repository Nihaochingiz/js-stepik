/**
 * Объект запроса для заказа в ресторане
 * @typedef {Object} RestaurantOrderRequest
 * @property {string} dishName - название блюда для заказа
 * @property {number} portion - количество порций
 */

/**
 * Функция обратного вызова для успешного выполнения заказа
 * @typedef {function} OrderSuccessCallback
 * @param {string} message - сообщение об успешном заказе
 */

/**
 * Функция обратного вызова для обработки ошибок заказа
 * @typedef {function} OrderErrorCallback
 * @param {string} message - сообщение об ошибке
 */

/**
 * Обертка для API функции заказа ресторана.
 * Размещает заказ через API ресторана, передавая все необходимые параметры.
 * @param {RestaurantOrderRequest} request - объект запроса с названием блюда и количеством порций
 * @param {OrderSuccessCallback} onSuccessCallback - функция обратного вызова для успешного заказа
 * @param {OrderErrorCallback} onErrorCallback - функция обратного вызова для обработки ошибок
 * @return {void}
 */
/**
 * Обертка для API функции заказа ресторана.
 * Размещает заказ через API ресторана, передавая все необходимые параметры.
 * @param {RestaurantOrderRequest} request - объект запроса с названием блюда и количеством порций
 * @param {OrderSuccessCallback} onSuccessCallback - функция обратного вызова для успешного заказа
 * @param {OrderErrorCallback} onErrorCallback - функция обратного вызова для обработки ошибок
 * @return {void}
 */
function orderFromRestaurant(request, onSuccessCallback, onErrorCallback) {
    // Проверяем валидность запроса (опционально)
    if (!request || typeof request !== 'object') {
        onErrorCallback('Некорректный запрос');
        return;
    }
    
    if (!request.dishName || typeof request.dishName !== 'string') {
        onErrorCallback('Некорректное название блюда');
        return;
    }
    
    if (!Number.isInteger(request.portion) || request.portion <= 0) {
        onErrorCallback('Некорректное количество порций');
        return;
    }
    
    // Вызываем API функцию placeOrder, передавая все параметры
    placeOrder(request, onSuccessCallback, onErrorCallback);
}