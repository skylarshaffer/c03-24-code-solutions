type Props = {
  quotes: string[];
  searchString: string;
};

export function QuotesList({ quotes, searchString }: Props) {
  const filteredQuotes = quotes.filter((value) =>
    value.toLowerCase().includes(searchString.toLowerCase())
  );
  const quotesList = filteredQuotes.map((quote) => <li>{quote}</li>);
  return (
    <ul>
      {quotesList.length === 0 ? 'No items match the filter.' : quotesList}
    </ul>
  );
}
