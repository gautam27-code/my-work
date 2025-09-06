const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

const firstImageClone = images[0].cloneNode(true);
const lastImageClone = images[images.length - 1].cloneNode(true);

carouselImages.appendChild(firstImageClone);
carouselImages.insertBefore(lastImageClone, images[0]);

const imageWidth = images[0].clientWidth;
carouselImages.style.transform = `translateX(${-imageWidth}px)`;

function showNextImage() {
    currentIndex++;
    carouselImages.style.transition = 'transform 0.5s ease-in-out';
    carouselImages.style.transform = `translateX(${-imageWidth * (currentIndex + 1)}px)`;

    if (currentIndex >= images.length) {
        setTimeout(() => {
            carouselImages.style.transition = 'none';
            currentIndex = 0;
            carouselImages.style.transform = `translateX(${-imageWidth}px)`;
        }, 500);
    }
}

function showPreviousImage() {
    currentIndex--;
    carouselImages.style.transition = 'transform 0.5s ease-in-out';
    carouselImages.style.transform = `translateX(${-imageWidth * (currentIndex + 1)}px)`;

    if (currentIndex < 0) {
        setTimeout(() => {
            carouselImages.style.transition = 'none';
            currentIndex = images.length - 1;
            carouselImages.style.transform = `translateX(${-imageWidth * (currentIndex + 1)}px)`;
        }, 500);
    }
}

setInterval(showNextImage, 3000);