import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import PokemonCard from '../components/PokemonCard'
import { Pokemon, PokeSpecieData } from '../interfaces/Pokemon'
import fetchData from '../utils/fetchData'

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((pokemon: Pokemon) => {
        return <PokemonCard key={pokemon.id} {...pokemon}></PokemonCard>
      })}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { results } = await fetchData(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
  )
  if (!results) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  }

  const pokemonNames: Array<string> = results.map(
    (specie: PokeSpecieData) => specie.name
  )

  let pokemonArray: Array<Pokemon> = []

  for (let i = 0; i < pokemonNames.length; i++) {
    const pokemon = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNames[i]}?limit=101&offset=0/`
    )

    const pokemonAbilities: Array<string> = pokemon.abilities.map(
      ({ ability }: any) => ability.name
    )
    const pokemonTypes = pokemon.types.map(({ type, slot }: any) => {
      let isPrimary: boolean = false
      if (slot == 1) isPrimary = true

      return {
        name: type.name,
        isPrimary,
      }
    })

    pokemonArray.push({
      id: pokemon.id,
      name: pokemon.name,
      baseExperience: pokemon.base_experience,
      image: pokemon.sprites.other['official-artwork'].front_default,
      abilities: pokemonAbilities,
      types: pokemonTypes,
    })
  }

  return {
    props: { data: pokemonArray },
  }
}

export default Home
