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
    <div className={`relative rounded shadow h-40 w-3/4 ${types[0].name}`}>
      <div className="absolute -left-8">
        <Image src={image} alt={name} width="150" height="150" />
      </div>
    </div>
  )
}

export default PokemonCard
