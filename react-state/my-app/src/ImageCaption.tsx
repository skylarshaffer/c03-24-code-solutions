import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [capIndex, setCapIndex] = useState(0);

  function handleClick() {
    if (capIndex >= imageCap.length - 1) {
      setCapIndex(0);
    } else {
      setCapIndex(capIndex + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleClick}>{imageCap[capIndex]}</h3>
    </div>
  );
}
