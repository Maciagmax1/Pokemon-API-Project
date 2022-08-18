import { SignPrivateKeyInput } from "crypto";
import Sprite from "./Sprite";
import Types from "./Types";

export default interface PokemonDetailsResponse {
  name: string;
  sprites: Sprite;
  types: Types[];
  weight: number;
}
