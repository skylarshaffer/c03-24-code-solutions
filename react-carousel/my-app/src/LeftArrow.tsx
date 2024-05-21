import { FaAngleLeft } from 'react-icons/fa';

type Props = {
  onLeftArrowClick: () => void;
};

export function LeftArrow({ onLeftArrowClick }: Props) {
  return <FaAngleLeft onClick={onLeftArrowClick} />;
}
