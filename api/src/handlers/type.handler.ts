import { getTypes } from '../controllers/type.controllers'

export const typePost = (req: any,res: any) =>{
	try {
		res.status(200).json({message: 'todo funcinando'})
	} catch (error) {
		res.status(400).json({message: error})
	}
}
export const typeGet =async(req: any,res: any) =>{
	try {
		res.status(200).json(await getTypes())
	} catch (error) {
		res.status(400).json(error)
	}
}