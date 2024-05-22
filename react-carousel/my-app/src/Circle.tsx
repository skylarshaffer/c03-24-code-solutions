import { FaRegCircle, FaCircle } from 'react-icons/fa';

type Props = {
  imageId: number;
  current: boolean;
  onCircleClick: (id: number) => void;
};

export function Circle({ imageId, current, onCircleClick }: Props) {
  const circle = current ? (
    <FaRegCircle
      className="circle circle-selected"
      key={imageId}
      onClick={() => {
        onCircleClick(imageId);
      }}
    />
  ) : (
    <FaCircle
      className="circle"
      key={imageId}
      onClick={() => {
        onCircleClick(imageId);
      }}
    />
  );
  return circle;
}
