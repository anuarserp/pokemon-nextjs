import Image from 'next/image'
import { Pokemon } from '../../interfaces/Pokemon'

const PokemonCard: React.FunctionComponent<Pokemon> = ({
  abilities,
  baseExperience,
  id,
  image,
  name,
  types,
}): JSX.Element => {
  return (
    <div className="rounded shadow w-full h-40">
      <img src={image} alt={name} className="h-full" />
    </div>
  )
}

export default PokemonCard
