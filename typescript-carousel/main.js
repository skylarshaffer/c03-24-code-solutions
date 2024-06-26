'use strict';
const data = {
  current: 1,
};
const $carousel = document.querySelector('#carousel');
const $carouselCirclesArray = $carousel.querySelectorAll(
  '#carousel-circles > *'
);
const $carouselImagesArray = $carousel.querySelectorAll('#carousel-images > *');
const domQueries = {
  $carousel,
  $carouselCirclesArray,
  $carouselImagesArray,
};
for (const key in domQueries) {
  if (!domQueries[key]) throw new Error(`The ${key} dom query failed`);
}
function moveCarouselTimer() {
  incrementCurrent();
  moveCarousel();
}
function restartMoveCarouselTimer() {
  clearInterval(moveCarouselTimerId);
  moveCarouselTimerId = setInterval(moveCarouselTimer, 3000);
}
let moveCarouselTimerId = setInterval(moveCarouselTimer, 3000);
function moveCarousel() {
  for (let i = 0; i < $carouselImagesArray.length; i++) {
    const currentImage = $carouselImagesArray[i];
    if (data.current.toString() !== currentImage.dataset.entryId) {
      currentImage.dataset.view = '';
    } else {
      currentImage.dataset.view = 'selected';
    }
  }
  for (let i = 0; i < $carouselCirclesArray.length; i++) {
    if ($carouselCirclesArray.length < $carouselImagesArray.length)
      throw new Error('There are less circles than images. Please fix.');
    const currentCircle = $carouselCirclesArray[i];
    if (data.current.toString() !== currentCircle.dataset.entryId) {
      currentCircle.classList.replace('fa-solid', 'fa-regular');
    } else {
      currentCircle.classList.replace('fa-regular', 'fa-solid');
    }
  }
}
function incrementCurrent() {
  if (data.current === $carouselImagesArray.length) {
    data.current = 1;
  } else data.current++;
}
function decrementCurrent() {
  if (data.current === 1) {
    data.current = $carouselImagesArray.length;
  } else data.current--;
}
$carousel.addEventListener('click', (event) => {
  const eventTarget = event.target;
  if (eventTarget.tagName === 'I') {
    restartMoveCarouselTimer();
    if (eventTarget.classList.contains('fa-angle-left')) {
      decrementCurrent();
    } else if (eventTarget.classList.contains('fa-angle-right')) {
      incrementCurrent();
    } else {
      data.current = ~~eventTarget.dataset.entryId;
    }
    moveCarousel();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    restartMoveCarouselTimer();
    decrementCurrent();
    moveCarousel();
  } else if (event.key === 'ArrowRight') {
    restartMoveCarouselTimer();
    incrementCurrent();
    moveCarousel();
  }
});
