"use client";
import { useState } from "react";
import { fetchPokemon, Pokemon } from "@/utils/fetchPokemon";

export function usePokemon(initialData: Pokemon[]) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialData);
  const [offset, setOffset] = useState(initialData.length);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const loadMore = async () => {
    setLoading(true);
    try {
      const newPokemon = await fetchPokemon(offset);
      setPokemonList((prev) => [...prev, ...newPokemon]);
      setOffset(offset + newPokemon.length);
    } catch (error) {
      console.error("Error loading more Pokémon:", error);
    }
    setLoading(false);
  };

  const filteredPokemon = pokemonList.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showLoadMore = filteredPokemon.length >= 15;
  return {
    pokemonList: filteredPokemon,
    loadMore,
    loading,
    searchTerm,
    setSearchTerm,
    showLoadMore,
  };
}
