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