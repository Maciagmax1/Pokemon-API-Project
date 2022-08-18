import { useEffect, useState } from "react";
import Pokemon from "../models/Pokemon";
import PokemonDetailsResponse from "../models/PokemonDetailsResponse";
import { getPokemonDetails } from "../services/PokemonServices";
import "./Details.css";
interface Props {
  pokemon: Pokemon;
}
const Details = ({ pokemon }: Props) => {
  const [pokemonDetails, setPokemonDetails] =
    useState<PokemonDetailsResponse | null>(null);
  useEffect(() => {
    getPokemonDetails(pokemon.url).then((response) =>
      setPokemonDetails(response)
    );
  }, []);

  return (
    <div className="Details">
      <>
        <p>{pokemon.name}</p>
        <img src={pokemonDetails?.sprites.front_default} alt="" />
        <p>{pokemonDetails?.types[0].type.name}</p>
        {pokemonDetails?.types[1] ? (
          <p>{pokemonDetails?.types[1].type.name}</p>
        ) : (
          ""
        )}
        <p>{pokemonDetails?.weight}</p>
      </>
    </div>
  );
};

export default Details;
