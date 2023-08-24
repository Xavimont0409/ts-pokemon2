import { Router } from "express";
import pokemonRouter  from './pokemon.router'
import typeRouter from "./type.router";
import userRouter from "./user.router";

const router = Router()

router.use('/pokemon', pokemonRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

export default router;