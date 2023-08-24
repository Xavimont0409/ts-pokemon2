export interface UserAttributes {
	id: string;
	name: string;
	lastName: string;
	email: string;
	password: string;
}
export type noIdUser = Omit<UserAttributes, "id">

export interface PokemonAtributes {
	id: string;
	name: string;
	image: string;
	life: number;
	attack: number;
	defense: number;
	speed: number;
	height: number;
	weight: number;
	created: boolean;
}
export type noIdPokemon = Omit<PokemonAtributes, "id">

export interface TypeAttributes {
	id: number;
	name: string;
}
export type noIdType = Omit<TypeAttributes, "id">