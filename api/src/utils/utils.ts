import { TypesPokemon } from "../../types"

export const parseString = (stringFromReq: any) : string=> {
	if(typeof stringFromReq !== 'string'){
		throw new Error('Name must be a string')
	}
	return stringFromReq
}
export const parseNumber = (numberFromReq: any) : number=> {
	if( typeof numberFromReq !== 'number'){
		throw new Error('no a number')
	}
	return numberFromReq
}
export const parseTypes = (typeFromReq: any) : string =>{
	if(typeof typeFromReq !== 'string' || !isTypePokemon(typeFromReq)){
		throw new Error('Types must be a string')
	}
	return typeFromReq
}

export const isString = (param : string): boolean =>{
	return typeof param === "string"
} 
export const isNumber = (param: any): boolean => {
  return typeof param === "number" && !isNaN(param);
}
export const isTypePokemon = (params : any) : boolean => {
	return Object.values(TypesPokemon).includes(params)
}
