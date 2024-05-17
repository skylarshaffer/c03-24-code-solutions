type Props = {
  current: number;
  items: string[];
};

export function Banner({ current, items }: Props) {
  return <span>{items[current]}</span>;
}
