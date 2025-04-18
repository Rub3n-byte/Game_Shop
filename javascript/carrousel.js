document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = slides.length;
  
    function updateCarousel() {
      // Calculate indices for previous and next slides
      const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      const nextSlide = (currentSlide + 1) % totalSlides;
  
      slides.forEach((slide, index) => {
        // Remove all three classes first
        slide.classList.remove('previous', 'active', 'next');
  
        if (index === currentSlide) {
          slide.classList.add('active');
        } else if (index === prevSlide) {
          slide.classList.add('previous');
        } else if (index === nextSlide) {
          slide.classList.add('next');
        }
      });
  
      // Update the dot indicators
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
  
    function changeSlide(direction) {
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
      updateCarousel();
    }
  
    function goToSlide(index) {
      currentSlide = index;
      updateCarousel();
    }
  
    // Attach click events on arrows
    document.querySelector('.arrow.left').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.arrow.right').addEventListener('click', () => changeSlide(1));
  
    // Attach click events on dots for direct navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });
  
    // Initialize the carousel
    updateCarousel();
  });
  