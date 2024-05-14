type Props = {
  imgDescription: string;
};

export function ImageDescription({ imgDescription }: Props) {
  return (
    <div>
      <p>{imgDescription}</p>
    </div>
  );
}
