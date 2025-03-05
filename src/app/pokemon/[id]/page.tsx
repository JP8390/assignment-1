import { notFound } from "next/navigation";
import { fetchPokemonById } from "@/utils/fetchPokemon";
import PokemonDetails from "@/component/pages/PokemonDetails";
import { Metadata } from "next";

export const revalidate = 86400;

type Params = Promise<{ id: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;

  if (!id) {
    return {
      title: "Pokemon Not Found",
      description: "The requested Pokémon does not exist.",
    };
  }

  const pokemon = await fetchPokemonById(id);
  if (!pokemon) {
    return {
      title: "Pokemon Not Found",
      description: "The requested Pokémon does not exist.",
    };
  }

  return {
    title: `Pokemon: ${pokemon.name}`,
    description: `Details about ${pokemon.name}, including type, abilities, and stats.`,
    openGraph: {
      title: `Pokemon: ${pokemon.name}`,
      description: `Explore ${pokemon.name}'s stats, abilities, and type.`,
      images: [
        {
          url: pokemon.sprites.other["official-artwork"].front_default,
          width: 400,
          height: 400,
          alt: `${pokemon.name} official artwork`,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const pokemon = await fetchPokemonById(id);
  if (!pokemon) return notFound();

  return <PokemonDetails pokemon={pokemon} />;
}
