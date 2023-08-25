import { addPokemon } from "../controllers/pokemon.controllers";
export const pokemonPost = async (req: any, res: any) => {
  try {
    res.status(200).json(await addPokemon(req.body));
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
