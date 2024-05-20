type Props = {
  onPrevClick: () => void;
};

export function Prev({ onPrevClick }: Props) {
  return <button onClick={onPrevClick}>Prev</button>;
}
