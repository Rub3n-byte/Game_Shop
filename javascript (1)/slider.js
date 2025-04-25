const slider = document.querySelector('.slider');
// Selecciona el input deslizante (slider) del DOM

const afterImage = document.querySelector('.image-after');
// Selecciona la imagen que se encuentra "después", para aplicar el efecto de recorte (clip)

const sliderLine = document.querySelector('.slider-line');
// Selecciona la línea divisoria entre ambas imágenes

const sliderHandle = document.querySelector('.slider-handle');
// Selecciona el manejador visual que se puede arrastrar

// Evento que se ejecuta cuando el slider cambia (por movimiento del input)
slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    // Obtiene el valor actual del slider (de 0 a 100)

    // Ajusta el clip-path de la imagen "after" para mostrar solo una parte proporcional
    afterImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;

    // Mueve visualmente la línea divisoria y el manejador al mismo valor
    sliderLine.style.left = `${sliderValue}%`;
    sliderHandle.style.left = `${sliderValue}%`;
});

// Variables y eventos para permitir arrastrar el manejador manualmente
let isDragging = false;
// Variable de control para saber si se está arrastrando el manejador

sliderHandle.addEventListener('mousedown', () => {
    isDragging = true;
    // Al presionar el botón del mouse sobre el manejador, se activa el arrastre
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    // Al soltar el mouse en cualquier parte de la pantalla, se detiene el arrastre
});

window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Solo ejecuta si se está arrastrando el manejador

        const rect = slider.getBoundingClientRect();
        // Obtiene el tamaño y la posición del slider en la pantalla

        const offsetX = e.clientX - rect.left;
        // Calcula la posición horizontal del mouse dentro del slider

        const sliderValue = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);
        // Convierte esa posición en un valor de 0 a 100, limitando los extremos

        // Actualiza el valor del slider y sincroniza los elementos visuales
        slider.value = sliderValue;
        afterImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
        sliderLine.style.left = `${sliderValue}%`;
        sliderHandle.style.left = `${sliderValue}%`;
    }
});
