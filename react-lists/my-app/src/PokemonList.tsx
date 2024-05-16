type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon) => <li>{pokemon.name}</li>);

  return <ul>{listItems}</ul>;
}
