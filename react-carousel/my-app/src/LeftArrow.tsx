import { FaAngleLeft } from 'react-icons/fa';

type Props = {
  onLeftArrowClick: () => void;
};

export function LeftArrow({ onLeftArrowClick }: Props) {
  return (
    <FaAngleLeft className="arrow left-arrow" onClick={onLeftArrowClick} />
  );
}
