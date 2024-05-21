import { FaRegCircle, FaCircle } from 'react-icons/fa';

type Props = {
  imageId: number;
  current: boolean;
  onCircleClick: (id: number) => void;
};

export function Circle({ imageId, current, onCircleClick }: Props) {
  const circle = current ? (
    <FaRegCircle
      key={imageId}
      onClick={() => {
        onCircleClick(imageId);
      }}
    />
  ) : (
    <FaCircle
      key={imageId}
      onClick={() => {
        onCircleClick(imageId);
      }}
    />
  );
  return circle;
}
