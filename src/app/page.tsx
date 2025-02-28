import PokemonList from "@/component/PokemonList";
import { fetchPokemon } from "@/utils/fetchPokemon";

export default async function Home() {
  const initialPokemon = await fetchPokemon(0);
  return <PokemonList initialPokemon={initialPokemon} />;
}
