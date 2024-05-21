import { useState } from 'react';
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
  images.forEach((image, index) => {
    image.id = index;
  });
  const [activeImageId, setActiveImageId] = useState(0);
  function handleRightArrowClick() {
    setActiveImageId((activeImageId + (images.length + 1)) % images.length);
  }
  function handleLeftArrowClick() {
    setActiveImageId((activeImageId + (images.length - 1)) % images.length);
  }
  function handleCircleClick(id: number) {
    setActiveImageId(id);
  }
  const circlesList = images.map((image) => (
    <Circle
      imageId={image.id || 0}
      current={image.id === activeImageId}
      onCircleClick={handleCircleClick}
    />
  ));
  const imagesList = images.map((image) => (
    <Image image={image} hidden={image.id === activeImageId} />
  ));
  return (
    <>
      <RightArrow onRightArrowClick={handleRightArrowClick} />
      <LeftArrow onLeftArrowClick={handleLeftArrowClick} />
      <div className="container" id="carousel-images">
        {imagesList}
      </div>
      <div>{circlesList}</div>
    </>
  );
}
