type Props = {
  onSearchInput: (value: string) => void;
};

export function SearchBar({ onSearchInput }: Props) {
  return (
    <input
      type="search"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchInput(event.target.value);
      }}
    />
  );
}
