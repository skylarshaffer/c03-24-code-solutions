import './ImageContainer.css';

type Props = {
  imageSrc: string;
};

export function ImageContainer({ imageSrc }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imageSrc} alt="space-image" />
      </div>
    </div>
  );
}
