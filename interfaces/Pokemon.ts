export interface Pokemon {
  id: number
  name: string
  baseExperience: number
  image: string
  abilities: Array<string>
  types: Array<string>
}

export interface PokeSpecieData {
  name: string
  url: string
}
