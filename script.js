const button = document.querySelector(".theme-toggle");
const body = document.querySelector(".container");

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const images = document.querySelectorAll('.slider-img');
const leftButton = document.querySelector('.slider-btn-left');
const rightButton = document.querySelector('.slider-btn-right');

let currentIndex = 0;

function showImage(index) {
    images.forEach(img => {
        img.classList.remove('active');
    });

    images[index].classList.add('active');
}

leftButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});
rightButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

showImage(currentIndex);