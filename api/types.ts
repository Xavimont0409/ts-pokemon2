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

export enum TypesPokemon {
	Normal = 'normal',
	Fighting = 'fighting',
	Poison= 'poison',
	Ground= 'ground',
	Rock= 'rock',
	Bug= 'bug',
	Ghost= 'ghost',
	Steel= 'steel',
	Fire= 'fire',
	Water= 'water',
	Grass= 'grass',
	Electric= 'electric',
	Psychic= 'psychic',
	Ice= "ice",
	Dragon= 'dragon',
	Dark= 'dark',
	Fairy= 'fairy',
	Unknown= 'unknown',
	Shadow= 'shadow'
}