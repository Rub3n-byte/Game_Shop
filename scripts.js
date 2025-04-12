const slider = document.querySelector('.slider');
const afterImage = document.querySelector('.image-after');

slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    afterImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
});
