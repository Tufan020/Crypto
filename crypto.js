const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselContent = document.querySelector('.carousel-content');
let currentSlide = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides; // Zorg voor cirkelvormige navigatie
    const offset = -currentSlide * 100; // Bereken de verschuiving
    carouselContent.style.transform = `translateX(${offset}%)`; // Verplaats slides
}

// Event listeners voor knoppen
prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Toon de eerste slide
showSlide(currentSlide);

