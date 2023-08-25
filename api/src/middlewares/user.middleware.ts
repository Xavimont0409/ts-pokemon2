import { isString } from "../utils/utils"
export const userMiddleware = (req: any, res: any, next: any) =>{
	try {
		if(!isString(req.body.name)) throw Error('Name must be a string')
		if(!isString(req.body.lastName)) throw Error('Lastname must be a string')
		if(!isString(req.body.email)) throw Error('Email must be a string')
		if(!isString(req.body.password)) throw Error('Password must be a string')
	} catch (error) {
		res.status(400).json(error)
	}
}