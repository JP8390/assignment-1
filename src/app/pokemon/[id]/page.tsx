import { notFound } from "next/navigation";
import { fetchPokemonById } from "@/utils/fetchPokemon";
import PokemonDetails from "@/component/pages/PokemonDetails";

export const revalidate = 86400;

export async function generateStaticParams() {
  const ids = Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
  return ids;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await fetchPokemonById(id);

  if (!pokemon) return notFound();

  return <PokemonDetails pokemon={pokemon} />;
}
