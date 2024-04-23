interface Data {
  current: number;
}

const data: Data = {
  current: 1,
};

const $carousel = document.querySelector('#carousel') as HTMLDivElement;
const $carouselCirclesArray = $carousel.querySelectorAll(
  '#carousel-circles > *'
) as NodeListOf<HTMLElement>;
const $carouselImagesArray = $carousel.querySelectorAll(
  '#carousel-images > *'
) as NodeListOf<HTMLImageElement>;

const domQueries: Record<string, any> = {
  $carousel,
  $carouselCirclesArray,
  $carouselImagesArray,
};

for (const key in domQueries) {
  if (!domQueries[key]) throw new Error(`The ${key} dom query failed`);
}

function moveCarousel(): void {
  incrementCurrent();
  for (let i = 0; i < $carouselImagesArray.length; i++) {
    const currentImage = $carouselImagesArray[i];
    if (data.current.toString() !== (currentImage.dataset.entryId as string)) {
      currentImage.dataset.view = '';
    } else {
      currentImage.dataset.view = 'selected';
    }
  }
  for (let i = 0; i < $carouselCirclesArray.length; i++) {
    if ($carouselCirclesArray.length < $carouselImagesArray.length)
      throw new Error('There are less circles than images. Please fix.');
    const currentCircle = $carouselCirclesArray[i];
    if (data.current.toString() !== (currentCircle.dataset.entryId as string)) {
      currentCircle.classList.replace('fa-solid', 'fa-regular');
    } else {
      currentCircle.classList.replace('fa-regular', 'fa-solid');
    }
  }
}

let moveCarouselId = setInterval(moveCarousel, 3000);

function restartMoveCarousel(): void {
  clearInterval(moveCarouselId);
  moveCarouselId = setInterval(moveCarousel, 3000);
}

function incrementCurrent(): void {
  if (data.current === $carouselImagesArray.length) {
    data.current = 1;
  } else data.current++;
}

function decrementCurrent(): void {
  if (data.current === 1) {
    data.current = $carouselImagesArray.length;
  } else data.current--;
}

$carousel.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  if (eventTarget.tagName === 'I') {
    restartMoveCarousel();
    if (eventTarget.classList.contains('fa-angle-left')) {
      decrementCurrent();
    } else if (eventTarget.classList.contains('fa-angle-right')) {
      incrementCurrent();
    } else {
      data.current = ~~(eventTarget.dataset.entryId as string);
    }
    for (let i = 0; i < $carouselImagesArray.length; i++) {
      const currentImage = $carouselImagesArray[i];
      if (
        data.current.toString() !== (currentImage.dataset.entryId as string)
      ) {
        currentImage.dataset.view = '';
      } else {
        currentImage.dataset.view = 'selected';
      }
    }
    for (let i = 0; i < $carouselCirclesArray.length; i++) {
      if ($carouselCirclesArray.length < $carouselImagesArray.length)
        throw new Error('There are less circles than images. Please fix.');
      const currentCircle = $carouselCirclesArray[i];
      if (
        data.current.toString() !== (currentCircle.dataset.entryId as string)
      ) {
        currentCircle.classList.replace('fa-solid', 'fa-regular');
      } else {
        currentCircle.classList.replace('fa-regular', 'fa-solid');
      }
    }
  }
});
