import { Pokemon } from "@/utils/fetchPokemon";
import Image from "next/image";

export default function PokemonCard({ id, name, image, type }: Pokemon) {
  return (
    <div
      key={id}
      className="card bg-white p-5 rounded-lg shadow-lg flex flex-col items-center"
    >
      <Image
        src={image}
        alt={name}
        className="w-24 h-24"
        width={200}
        height={200}
      />
      <h2 className="text-xl text-gray-600 font-semibold mt-2">{name}</h2>
      <p className="text-gray-500">Type: {type}</p>
    </div>
  );
}
