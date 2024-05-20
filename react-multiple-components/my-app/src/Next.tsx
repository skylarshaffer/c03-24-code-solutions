type Props = {
  onNextClick: () => void;
};

export function Next({ onNextClick }: Props) {
  return <button onClick={onNextClick}>Next</button>;
}
