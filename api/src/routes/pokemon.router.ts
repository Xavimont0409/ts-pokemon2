import { Router } from "express";
import { pokemonPost } from "../handlers/pokemon.handler";
import { pokemonMiddleware } from '../middlewares/pokemon.middleware'
const pokemonRouter = Router()

pokemonRouter.post('/',pokemonMiddleware, pokemonPost )

export default pokemonRouter