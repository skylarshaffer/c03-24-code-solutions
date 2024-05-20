type Props = {
  current: number;
  onNumberClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  items: string[];
};

export function Numbers({ current, onNumberClick, items }: Props) {
  console.log(current);
  const numbers = [];
  for (let i = 0; i < items.length; i++) {
    numbers.push(i);
  }
  const numbersList = numbers.map((number) => (
    <button
      className={number === current ? 'active' : undefined}
      id={number.toString()}
      onClick={onNumberClick}>
      {number}
    </button>
  ));

  return <ul>{numbersList}</ul>;
}
