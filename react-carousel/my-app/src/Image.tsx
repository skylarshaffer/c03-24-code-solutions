type Image = {
  src: string;
  alt: string;
  id?: number;
};

type Props = {
  image: Image;
  show: boolean;
};

export function Image({ image, show }: Props) {
  return show ? <img src={image.src} key={image.id} alt={image.alt} /> : '';
}
