import { useState } from 'react';
import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonText = 'Click for Next Image';
if (
  imageSrc.length !== imageCap.length ||
  imageCap.length !== imageDescrip.length ||
  imageDescrip.length === null
) {
  console.log(
    'Images, captions, or descriptions are not equal in quantity, using lowest quantity.'
  );
}
const carouselLength = Math.min(
  imageSrc.length,
  imageCap.length,
  imageDescrip.length
);

export function App() {
  const [buttonIndex, setButtonIndex] = useState(0);
  function handleClick() {
    if (buttonIndex >= carouselLength - 1) {
      setButtonIndex(0);
    } else {
      setButtonIndex(buttonIndex + 1);
    }
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc[buttonIndex]} />
      <ImageCaption imageCap={imageCap[buttonIndex]} />
      <ImageDescription imageDescrip={imageDescrip[buttonIndex]} />
      <ButtonContainer onButtonClick={handleClick} buttonText={buttonText} />
    </>
  );
}
