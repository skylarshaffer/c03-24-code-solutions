import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [descripIndex, setDescripIndex] = useState(0);

  function handleClick() {
    if (descripIndex >= imageDescrip.length - 1) {
      setDescripIndex(0);
    } else {
      setDescripIndex(descripIndex + 1);
    }
  }
  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[descripIndex]}</p>
    </div>
  );
}
