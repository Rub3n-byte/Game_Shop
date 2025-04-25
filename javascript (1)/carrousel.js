document.addEventListener('DOMContentLoaded', () => {
  // Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código

  const slides = document.querySelectorAll('.carousel-slide');
  // Selecciona todos los elementos que representan las diapositivas del carrusel

  const dots = document.querySelectorAll('.dot');
  // Selecciona todos los elementos que representan los puntos indicadores

  let currentSlide = 0;
  // Variable que indica cuál es la diapositiva actual (empezando desde la 0)

  const totalSlides = slides.length;
  // Guarda el número total de diapositivas que hay

  function updateCarousel() {
    // Esta función actualiza el estado del carrusel (clases de las diapositivas y puntos activos)

    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    // Calcula el índice de la diapositiva anterior de forma circular

    const nextSlide = (currentSlide + 1) % totalSlides;
    // Calcula el índice de la siguiente diapositiva de forma circular

    slides.forEach((slide, index) => {
      // Recorre todas las diapositivas

      slide.classList.remove('previous', 'active', 'next');
      // Elimina las clases de estado anteriores para evitar conflictos

      if (index === currentSlide) {
        slide.classList.add('active');
        // Si es la diapositiva actual, se le añade la clase "active"
      } else if (index === prevSlide) {
        slide.classList.add('previous');
        // Si es la anterior, se le añade la clase "previous"
      } else if (index === nextSlide) {
        slide.classList.add('next');
        // Si es la siguiente, se le añade la clase "next"
      }
    });

    dots.forEach((dot, index) => {
      // Recorre todos los puntos indicadores

      dot.classList.toggle('active', index === currentSlide);
      // Añade la clase "active" solo al punto correspondiente a la diapositiva actual
    });
  }

  function changeSlide(direction) {
    // Cambia la diapositiva actual en función de la dirección (1 para siguiente, -1 para anterior)

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    // Calcula el nuevo índice de forma circular

    updateCarousel();
    // Actualiza el carrusel con la nueva diapositiva actual
  }

  function goToSlide(index) {
    // Cambia directamente a una diapositiva específica (por su índice)

    currentSlide = index;
    // Actualiza la diapositiva actual con el índice pasado

    updateCarousel();
    // Actualiza el carrusel con la nueva diapositiva actual
  }

  document.querySelector('.arrow.left').addEventListener('click', () => changeSlide(-1));
  // Añade el evento al botón de flecha izquierda para ir a la diapositiva anterior

  document.querySelector('.arrow.right').addEventListener('click', () => changeSlide(1));
  // Añade el evento al botón de flecha derecha para ir a la siguiente diapositiva

  dots.forEach((dot, index) => {
    // Recorre todos los puntos para permitir la navegación directa

    dot.addEventListener('click', () => goToSlide(index));
    // Cuando se hace clic en un punto, se navega a la diapositiva correspondiente
  });

  updateCarousel();
  // Inicializa el carrusel mostrando correctamente la primera diapositiva y los puntos
});
