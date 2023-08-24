import { Router } from "express";
import { pokemonPost } from "../handlers/pokemon.handler";

const pokemonRouter = Router()

pokemonRouter.post('/', pokemonPost )

export default pokemonRouter