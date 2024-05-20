type Props = {
  onSearchInput: (value: string) => void;
};

export function SearchBar({ onSearchInput }: Props) {
  return (
    <input
      type="search"
      onChange={(event) => onSearchInput(event.target.value)}
    />
  );
}
