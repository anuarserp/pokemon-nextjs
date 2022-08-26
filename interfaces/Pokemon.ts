export interface MinPokemon {
  id: number
  name: string
  image: string
  types: Array<string>
}

export interface Pokemon extends MinPokemon {
  baseExperience: number
  abilities: Array<string>
}

export interface PokeSpecieData {
  name: string
  url: string
}
