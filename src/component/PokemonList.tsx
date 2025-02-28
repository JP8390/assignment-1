"use client";
import { usePokemon } from "@/hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "@/utils/fetchPokemon";

interface PokemonListProps {
  initialPokemon: Pokemon[];
}

export default function PokemonList({ initialPokemon }: PokemonListProps) {
  const {
    pokemonList,
    loadMore,
    loading,
    searchTerm,
    setSearchTerm,
    showLoadMore,
  } = usePokemon(initialPokemon);

  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center p-5">
        <div className="rounded-lg p-5">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full max-w-[260px] bg-white pl-2 text-black font-semibold outline-0 rounded-r-lg"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 justify-center">
        {pokemonList.length > 0 ? (
          pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))
        ) : (
          <div className="text-center col-span-5">
            <p className="text-lg font-semibold text-gray-500">
              No Pokémon found with this name
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="border-red-500 border mt-3 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-500 transition-colors cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
      </div>
      {loading && (
        <div className="flex justify-center p-5">
          <div className="loader"></div>
        </div>
      )}

      <div className="flex justify-center p-5">
        {showLoadMore && (
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-green-700 py-2 px-2 rounded-lg text-white font-semibold hover:bg-green-600 transition-colors cursor-pointer disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
}
