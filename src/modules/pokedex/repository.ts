import { AppPokeApiGateway } from '@app/api-gateways/app.poke-api-gateway'
// import { AppPokeSpritesApiGateway } from '@app/api-gateways/app.poke-sprites-api-gateway'
import { IDtoPokemon, IDtoPokemonList } from './pokemon.dto'

export async function getPokemons ({ limit = 0 }): Promise<IDtoPokemon[]> {
  const query = limit > 0 ? `?limit=${limit}` : ''
  const pokemonList = await AppPokeApiGateway.get<IDtoPokemonList>(query)

  // Obtenemos la imagen como un archivo blob
  // const res = await Promise.all(
  //   pokemonList.data.results.map(async (pokemon, index) => {
  //     index++

  //     pokemon.img = (await AppPokeSpritesApiGateway.get(`/${index}.png`)).data

  //     return pokemon
  //   })
  // )

  // Obtenemos la imagen como un String (un link)
  const res = pokemonList.data.results.map((pokemon, index) => {
    index++

    pokemon.img = `${process.env.REACT_APP_POKE_SPRITES_API_GATEWAY}/${index}.png`

    return pokemon
  })

  return res
}
