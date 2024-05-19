type Props = {
  quotes: string[];
  searchString: string;
};

export function QuotesList({ quotes, searchString }: Props) {
  function searchFunction(value: string) {
    return value.toLowerCase().includes(searchString.toLowerCase());
  }
  const filteredQuotes = quotes.filter(searchFunction);
  const quotesList = filteredQuotes.map((quote) => <li>{quote}</li>);
  return <ul>{quotesList}</ul>;
}
