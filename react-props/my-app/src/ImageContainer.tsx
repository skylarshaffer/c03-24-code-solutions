type Props = {
  imgSrc: string;
};

import './ImageContainer.css';

export function ImageContainer({ imgSrc }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imgSrc} alt="space-image" />
      </div>
    </div>
  );
}
