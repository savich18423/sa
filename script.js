let coinCount = 0;

// Функция для обработки нажатия на лису
function tapFox() {
    coinCount += 1; // Добавляем 1 монету
    document.getElementById('coinCount').innerText = coinCount; // Обновляем счетчик
}

// Назначаем обработчик события на изображение
document.getElementById('fox').addEventListener('click', tapFox);
