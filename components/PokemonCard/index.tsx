import Image from 'next/image'
import { Pokemon } from '../../interfaces/Pokemon'

const PokemonCard: React.FunctionComponent<Pokemon> = ({
  image,
  name,
  types,
}): JSX.Element => {
  return (
    <div className={`relative rounded shadow h-40 w-80 ${types[0]}`}>
      <div className="absolute -left-8">
        <Image src={image} alt={name} width="150" height="150" />
      </div>
      <div className="flex justify-end text-white text-card mr-4 ">
        <div>
          <p className="font-bold text-3xl	">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          <div className="flex justify-end mt-4">
            <div className="flex flex-col">
              {types.map((type, i) => (
                <span className={`${type} px-2 rounded-xl `} key={i}>
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
