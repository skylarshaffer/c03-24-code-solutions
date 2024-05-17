import { RotatingBanner } from './RotatingBanner';
import './App.css';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export default function App() {
  return <RotatingBanner items={items} />;
}
