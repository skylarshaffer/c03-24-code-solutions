import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const popupOpacity = 0.5;
  const popupChildren = (
    <ul className="menu">
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
      <li>Menu Item 3</li>
      <li>Menu Item 4</li>
    </ul>
  );

  return (
    <>
      <button ref={button} onClick={() => setIsOpen(!isOpen)}>
        Pop up!
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
        obcaecati nostrum eaque ipsam, facere voluptatibus dolore rem ab iusto
        unde nemo molestiae exercitationem.
      </p>
      <Popup
        opacity={popupOpacity}
        isOpen={isOpen}
        positionTo={button}
        onPopupClick={() => setIsOpen(false)}>
        {popupChildren}
      </Popup>
      <p>Ea quibusdam pariatur possimus atque, enim exercitationem?</p>
    </>
  );
}
