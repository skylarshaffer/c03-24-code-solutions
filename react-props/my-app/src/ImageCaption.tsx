type Props = {
  imgCaption: string;
};

export function ImageCaption({ imgCaption }: Props) {
  return (
    <div>
      <h3>{imgCaption}</h3>
    </div>
  );
}
