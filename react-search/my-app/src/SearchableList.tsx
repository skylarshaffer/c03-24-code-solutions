import { SearchBar } from './SearchBar';
import { QuotesList } from './QuotesList';
import './SearchableList.css';
import React, { useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [searchString, setSearchString] = useState('');
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const eventTarget = event.target as HTMLInputElement;
    setSearchString(eventTarget.value);
  }

  return (
    <div id="searchable-list">
      <SearchBar onSearchInput={handleSearch} />
      <QuotesList quotes={quotes} searchString={searchString} />
    </div>
  );
}
