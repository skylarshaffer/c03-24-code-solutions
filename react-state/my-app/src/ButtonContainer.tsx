type Props = {
  buttonText: string;
};

export function ButtonContainer({ buttonText }: Props) {
  return (
    <div>
      <button>{buttonText}</button>
    </div>
  );
}
