"use client";
import { PokemonDetailed } from "@/utils/fetchPokemon";
import Image from "next/image";
import Link from "next/link";

export default function PokemonDetails({
  pokemon,
}: {
  pokemon: PokemonDetailed;
}) {
  return (
    <section className="max-w-[85%] md:max-w-3xl mx-auto p-6 bg-white text-gray-600 shadow-lg rounded-lg my-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="mx-auto my-4"
          priority
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg font-semibold">Height:</p>
          <p>{pokemon.height / 10} m</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Weight:</p>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Type:</h3>
        <ul className="list-disc ml-5">
          {pokemon.types.map(({ type }: { type: { name: string } }) => (
            <li key={type.name} className="capitalize">
              {type.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Abilities:</h3>
        <ul className="list-disc ml-5">
          {pokemon.abilities.map(
            ({
              ability,
              is_hidden,
            }: {
              ability: { name: string };
              is_hidden: boolean;
            }) => (
              <li key={ability.name} className="capitalize">
                {ability.name}{" "}
                {is_hidden && <span className="text-gray-500">(Hidden)</span>}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Stats:</h3>
        <div className="mt-2">
          {pokemon.stats.map(
            ({
              base_stat,
              stat,
            }: {
              base_stat: number;
              stat: { name: string };
            }) => (
              <div
                key={stat.name}
                className="flex justify-between border-b py-1"
              >
                <span className="capitalize">{stat.name}</span>
                <span>{base_stat}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="relative inline-flex items-center justify-center px-6 py-2 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 shadow-md"
        >
          Back to List
        </Link>
      </div>
    </section>
  );
}
