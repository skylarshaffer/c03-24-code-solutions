import './ButtonContainer.css';
import { useState } from 'react';

type Props = {
  buttonText: string;
};

export function ButtonContainer({ buttonText }: Props) {
  const [buttonIndex, setButtonIndex] = useState(0);
  function handleClick() {
    setButtonIndex(buttonIndex + 1);
  }

  return (
    <div>
      <button
        className={'color' + Math.floor(buttonIndex / 3).toString()}
        onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}
