import db from "../database/models";
import { TypeAttributes } from '../../types'
import axios from 'axios'

export const addType = () =>{
	
}

export const getTypes = async(): Promise<TypeAttributes[]>=>{
	const dataTypes = await db.Type.findAll();
	if(dataTypes.length === 0){
		const allTypeApi = await axios.get("https://pokeapi.co/api/v2/type")
		const resultApi = allTypeApi.data.results;
		const copyDb = resultApi.map((type: any) => {
			db.Type.create({
				name: type.name
			})
		})
		return []
	}
	return dataTypes
}