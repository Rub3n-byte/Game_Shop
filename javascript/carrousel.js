let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function changeSlide(direction) {
    // Oculta la slide actual
    slides[currentSlide].classList.remove('active');
    
    // Cambia el índice de la slide
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Muestra la nueva slide
    slides[currentSlide].classList.add('active');
}
