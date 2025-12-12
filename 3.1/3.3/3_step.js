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