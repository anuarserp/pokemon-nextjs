import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import PokemonCard from '../components/PokemonCard'
import { MinPokemon, Pokemon } from '../interfaces/Pokemon'
import fetchData from '../utils/fetchData'

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 place-items-center">
        {data.map((pokemon: Pokemon) => {
          return <PokemonCard key={pokemon.id} {...pokemon}></PokemonCard>
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let pokemonArray: Array<MinPokemon> = []

  for (let i = 1; i <= 150; i++) {
    const pokemon = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${[i]}?limit=101&offset=0/`
    )

    const pokemonTypes = pokemon.types.map(({ type }: any) => type.name)

    pokemonArray.push({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other['official-artwork'].front_default,
      types: pokemonTypes,
    })
  }

  return {
    props: { data: pokemonArray },
  }
}

export default Home
