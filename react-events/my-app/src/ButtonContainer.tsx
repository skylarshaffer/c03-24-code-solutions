type Props = {
  buttonText: string;
  onButtonClick: () => void;
};

export function ButtonContainer({ buttonText, onButtonClick }: Props) {
  return (
    <div>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}
