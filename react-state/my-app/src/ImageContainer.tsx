import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [srcIndex, setSrcIndex] = useState(0);

  function handleClick() {
    if (srcIndex >= imageSrc.length - 1) {
      setSrcIndex(0);
    } else {
      setSrcIndex(srcIndex + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={handleClick}
          className="image-fill"
          src={imageSrc[srcIndex]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
