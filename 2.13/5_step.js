function simpleBookingStatus(bookings, bookingId) {
    const value = bookings[bookingId];
    
    // Проверяем: ключ не существует ИЛИ значение равно null
    if (value === undefined || value === null) {
        return 'недействительное бронирование !!!';
    }
    
    return value;
}

const bookings = {
  '0BR5Z123': null,
  '23LA9T41': 'Анна Петрова',
};

// Тестируем:
console.log(simpleBookingStatus(bookings, '23LA9T41'));
// => 'Анна Петрова' ✅

console.log(simpleBookingStatus(bookings, '0BR5Z123'));
// => 'недействительное бронирование !!!' ✅
// потому что value = null

console.log(simpleBookingStatus(bookings, 'XY90VAW7'));
