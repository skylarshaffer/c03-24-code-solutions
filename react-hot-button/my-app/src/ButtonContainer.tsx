import './ButtonContainer.css';
import { useState } from 'react';

type Props = {
  buttonText: string;
};

export function ButtonContainer({ buttonText }: Props) {
  const [buttonIndex, setButtonIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  function handleClick() {
    setButtonIndex(buttonIndex + 1);
    switch (buttonIndex + 1) {
      case 3:
        setColorIndex(1);
        break;
      case 6:
        setColorIndex(2);
        break;
      case 9:
        setColorIndex(3);
        break;
      case 12:
        setColorIndex(4);
        break;
      case 15:
        setColorIndex(5);
        break;
      case 18:
        setColorIndex(6);
        break;
    }
  }

  return (
    <div>
      <button className={'color' + colorIndex.toString()} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}
