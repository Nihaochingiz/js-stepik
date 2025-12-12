/**
 * Функция обратного вызова для успешного заказа.
 * Вызывает сервис уведомлений с сообщением об успехе.
 * @param message {string} Сообщение об успешном заказе
 * @return {void}
 */
function onOrderSuccess(message) {
    const notification = {
        status: 'ORDER_SUCCESS',
        message: message
    };
    
    sendNotification(notification);
}

/**
 * Функция обратного вызова для неудачного заказа.
 * Вызывает сервис уведомлений с сообщением об ошибке.
 * @param message {string} Сообщение об ошибке
 * @return {void}
 */
function onOrderFailure(message) {
    const notification = {
        status: 'ORDER_FAILED',
        message: message,
    };
    sendNotification(notification);
}

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
 * Объект запроса для заказа в ресторане
 * @typedef {Object} RestaurantOrderRequest
 * @property {string} dishName - название блюда для заказа
 * @property {number} portion - количество порций
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
    
    placeOrder(request, onSuccessCallback, onErrorCallback);
}

/**
 * Упрощенная функция для размещения заказа.
 * Создает запрос из переданных параметров и размещает заказ.
 * @param {string} dishName - название блюда
 * @param {number} portion - количество порций
 * @return {void}
 */
function submitOrder(dishName, portion) {
    // Создаем объект запроса из переданных параметров
    const request = {
        dishName: dishName,
        portion: portion
    };
    
    // Вызываем существующую функцию orderFromRestaurant
    // с созданным запросом и стандартными callback-функциями
    orderFromRestaurant(request, onOrderSuccess, onOrderFailure);
}