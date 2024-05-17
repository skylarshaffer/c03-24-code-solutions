type Props = {
  current: number;
};

export function Numbers({ current }: Props) {
  console.log(current);
  return (
    <ul>
      <button>0</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </ul>
  );
}
