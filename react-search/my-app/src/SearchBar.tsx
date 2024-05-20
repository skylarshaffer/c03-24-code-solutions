type Props = {
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ onSearchInput }: Props) {
  return <input type="search" onChange={onSearchInput} />;
}
