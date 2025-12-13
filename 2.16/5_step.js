/**
 * Рассчитывает стоимость открытки
 * 
 * @param {string} message - содержимое открытки
 * @param {string} currency - валюта для отображения
 * @returns {string} строка с информацией о стоимости
 */
function calculatePrice(message, currency) {
    const BASE_PRICE = 15;
    const LETTER_PRICE = 1.5;
    
    const messageLength = message.length;
    
    const totalPrice = BASE_PRICE + (messageLength * LETTER_PRICE);
    
    const formattedPrice = totalPrice.toFixed(2);
    
    return `Ваша открытка стоит ${formattedPrice} ${currency}.`;
}


console.log(calculatePrice('Поздравляем с Новым годом, Анна!', 'рублей'));

