import { isTypePokemon } from "../utils/utils"
export const typeMiddleware = (req: any, res: any, next: any) =>{
	try {
		if(!isTypePokemon(req.body.name)) throw Error('Name must be a string')
		next()
	} catch (error) {
		res.status(400).json(error)
	}
}