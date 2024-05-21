import { FaAngleRight } from 'react-icons/fa';

type Props = {
  onRightArrowClick: () => void;
};

export function RightArrow({ onRightArrowClick }: Props) {
  return <FaAngleRight onClick={onRightArrowClick} />;
}
