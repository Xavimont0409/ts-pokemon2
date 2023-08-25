import db from "../database/models";
import { noIdPokemon } from '../../types'

export const addPokemon = async(obj: any): Promise<noIdPokemon>=>{
	const pokemon = {
	name: obj.name,
	image: obj.image,
	life: obj.life,
	attack: obj.attack,
	defense: obj.defense,
	speed: obj.speed,
	height: obj.height,
	weight: obj.weight
	}	
	const createPokemon = await db.Pokemon.create(pokemon)
	const findTypers= await db.Type.findAll({where: { name: obj.type }})
	return createPokemon
}