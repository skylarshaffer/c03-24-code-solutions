import { useCallback, useEffect, useState } from 'react';
import './Carousel.css';
import { Image } from './Image';
import { RightArrow } from './RightArrow';
import { LeftArrow } from './LeftArrow';
import { Circle } from './Circle';

type Image = {
  src: string;
  alt: string;
  id?: number;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [activeImageId, setActiveImageId] = useState(0);
  const [time, setTime] = useState(0);
  const incrementCarousel = useCallback(() => {
    setActiveImageId((activeImageId + (images.length + 1)) % images.length);
  }, [activeImageId, images.length]);
  function decrementCarousel() {
    setActiveImageId((activeImageId + (images.length - 1)) % images.length);
  }
  function resetTimer() {
    setTime(0);
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time + 1);
      incrementCarousel();
    }, 3000);
    return () => clearTimeout(timerId);
  }, [time, incrementCarousel]);
  images.forEach((image, index) => {
    image.id = index;
  });
  function handleLeftArrowClick() {
    decrementCarousel();
    resetTimer();
  }
  function handleRightArrowClick() {
    incrementCarousel();
    resetTimer();
  }
  function handleCircleClick(id: number) {
    setActiveImageId(id);
    resetTimer();
  }
  const circlesList = images.map((image) => (
    <Circle
      key={image.id}
      imageId={image.id || 0}
      current={image.id === activeImageId}
      onCircleClick={handleCircleClick}
    />
  ));
  const imagesList = images.map((image) => (
    <Image key={image.id} image={image} hidden={image.id === activeImageId} />
  ));
  return (
    <main className="container">
      <div className="row">
        <div className="column-full">
          <div className="container" id="carousel">
            <div className="column-one-seventh center-both">
              <LeftArrow onLeftArrowClick={handleLeftArrowClick} />
            </div>
            <div className="column-full column-stretch">
              <div className="row row-stretch">
                <div className="container" id="carousel-images">
                  {imagesList}
                </div>
              </div>
              <div className="row">
                <div className="container" id="carousel-circles">
                  <div>{circlesList}</div>
                </div>
              </div>
            </div>
            <div className="column-one-seventh center-both">
              <RightArrow onRightArrowClick={handleRightArrowClick} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
