import { isString, isNumber } from '../utils/utils'
export const pokemonMiddleware = (req: any, res: any, next: any) => {
  try {
		if(!isString(req.body.name)) throw Error('Name must be a string')
		if(!isString(req.body.image)) throw Error('Image must be a string')
		if(!isNumber(req.body.life)) throw Error('Life must be a string')
		if(!isNumber(req.body.attack)) throw Error('Attack must be a string')
		if(!isNumber(req.body.defense)) throw Error('Defense must be a string')
		if(!isNumber(req.body.speed)) throw Error('Speed must be a string')
		if(!isNumber(req.body.height)) throw Error('Height must be a string')
		if(!isNumber(req.body.weight)) throw Error('Weight must be a string')
    next();
  } catch (e) {
    res.status(400).json({message: e});
  }
};
