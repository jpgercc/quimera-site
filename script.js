const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
