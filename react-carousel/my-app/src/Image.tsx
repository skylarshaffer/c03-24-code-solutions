type Image = {
  src: string;
  alt: string;
  id?: number;
};

type Props = {
  image: Image;
  hidden: boolean;
};

export function Image({ image, hidden }: Props) {
  return (
    <img
      src={image.src}
      key={image.id}
      style={{ display: hidden ? '' : 'none' }}
      alt={image.alt}
    />
  );
}
