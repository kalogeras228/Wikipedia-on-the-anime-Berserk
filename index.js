let currentSlide = 1;

function nextSlide() {
    currentSlide = currentSlide >= 10 ? 1 : currentSlide + 1;
    document.getElementById(`slide${currentSlide}`).checked = true;
}

function prevSlide() {
    currentSlide = currentSlide <= 1 ? 10 : currentSlide - 1;
    document.getElementById(`slide${currentSlide}`).checked = true;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчики для точек
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const slideNum = this.getAttribute('for').replace('slide', '');
            currentSlide = parseInt(slideNum);
        });
    });
});