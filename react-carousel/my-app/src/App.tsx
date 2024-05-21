import './App.css';
import { Carousel } from './Carousel';

export default function App() {
  const images = [
    {
      src: '/images/001.png',
      alt: 'Bulbasaur',
    },
    {
      src: '/images/004.png',
      alt: 'Charmander',
    },
    {
      src: '/images/007.png',
      alt: 'Squirtle',
    },
    {
      src: '/images/025.png',
      alt: 'Pikachu',
    },
    {
      src: '/images/039.png',
      alt: 'Jigglypuff',
    },
  ];
  return <Carousel images={images} />;
}
