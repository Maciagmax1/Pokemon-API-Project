import { useEffect, useState } from "react";
import Pokemon from "../models/Pokemon";
import { getPokemonDetails, getPokemonList } from "../services/PokemonServices";
import Details from "./Details";
import "./Main.css";

const Main = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    getPokemonList().then((response) => setPokemon(response.results));
  }, []);
  return (
    <div className="Main">
      {pokemon.map((item) => (
        <Details pokemon={item} />
      ))}
    </div>
  );
};

export default Main;
