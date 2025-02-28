export interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

export interface PokemonDetailed {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  stats: { base_stat: number; stat: { name: string } }[];
}
export async function fetchPokemon(offset: number = 0): Promise<Pokemon[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon?limit=15&offset=${offset}`
  );
  const data = await response.json();

  const promises = data.results.map(async (pokemon: { url: string }) => {
    const res = await fetch(pokemon.url);
    const details = await res.json();
    return {
      id: details.id,
      name: details.name,
      image: details.sprites.front_default,
      type: details.types
        .map((t: { type: { name: string } }) => t.type.name)
        .join(", "),
    };
  });

  return await Promise.all(promises);
}

export async function fetchPokemonById(
  id: string
): Promise<PokemonDetailed | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/${id}`,
    {
      next: { revalidate: 86400 },
    }
  );
  if (!res.ok) return null;
  const details = await res.json();
  return details;
}
