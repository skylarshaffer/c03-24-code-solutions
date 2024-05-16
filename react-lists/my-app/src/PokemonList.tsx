type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  return (
    <ul>
      <li>{pokedex[0].name}</li>
      <li>{pokedex[1].name}</li>
      <li>{pokedex[2].name}</li>
      <li>{pokedex[3].name}</li>
      <li>{pokedex[4].name}</li>
    </ul>
  );
}
