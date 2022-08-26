import Image from 'next/image'
import { Pokemon } from '../../interfaces/Pokemon'
import toCapitalize from '../../utils/toCapitalize'

const PokemonCard: React.FunctionComponent<Pokemon> = ({
  image,
  name,
  types,
}): JSX.Element => {
  return (
    <div className={`relative rounded shadow h-40 w-80 bg-${types[0]}`}>
      <div className="absolute -left-8">
        <Image src={image} alt={name} width="150" height="150" />
      </div>
      <div className="flex justify-end text-gray-500 text-card mr-4 ">
        <div>
          <p className="font-bold text-3xl	">{toCapitalize(name)}</p>
          <div className="flex justify-end mt-4">
            <div className="flex flex-col">
              {types.map((type, i) => (
                <span
                  className={`opc-${type} font-bold text-white  border-2 m-1 px-2 rounded-xl w-20 text-center`}
                  key={i}
                >
                  {toCapitalize(type)}
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
