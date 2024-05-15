type Props = {
  headerText: string;
};

export function Header({ headerText }: Props) {
  return <h1>{headerText}</h1>;
}
