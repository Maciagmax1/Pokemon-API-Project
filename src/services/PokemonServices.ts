import axios from "axios";

export const getPokemonList = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.data);
};

export const getPokemonDetails = (url: string) => {
  return axios.get(`${url}`).then((response) => response.data);
};
