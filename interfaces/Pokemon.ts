export interface PokemonType {
  name: string
  isPrimary: boolean
}

export interface Pokemon {
  id: number
  name: string
  baseExperience: number
  image: string
  abilities: Array<string>
  types: Array<PokemonType>
}

export interface PokeSpecieData {
  name: string
  url: string
}
