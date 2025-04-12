const slider = document.querySelector('.slider');
const afterImage = document.querySelector('.image-after');
const sliderLine = document.querySelector('.slider-line');
const sliderHandle = document.querySelector('.slider-handle');

slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;

    // Ajustar el clip-path de la segunda imagen
    afterImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;

    // Mover la línea y el manejador
    sliderLine.style.left = `${sliderValue}%`;
    sliderHandle.style.left = `${sliderValue}%`;
});

// Permitir arrastrar el manejador visual
let isDragging = false;

sliderHandle.addEventListener('mousedown', () => {
    isDragging = true;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const rect = slider.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const sliderValue = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);

        // Actualizar el valor del input y sincronizar los elementos
        slider.value = sliderValue;
        afterImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
        sliderLine.style.left = `${sliderValue}%`;
        sliderHandle.style.left = `${sliderValue}%`;
    }
});
