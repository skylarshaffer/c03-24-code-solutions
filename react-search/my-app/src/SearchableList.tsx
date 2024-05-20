import { SearchBar } from './SearchBar';
import { QuotesList } from './QuotesList';
import './SearchableList.css';
import { useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [searchString, setSearchString] = useState('');
  function handleSearch(value: string) {
    setSearchString(value);
  }

  return (
    <div id="searchable-list">
      <SearchBar onSearchInput={handleSearch} />
      <QuotesList quotes={quotes} searchString={searchString} />
    </div>
  );
}
