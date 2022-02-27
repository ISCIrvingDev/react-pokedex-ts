import { AppPokeApiGateway } from '@app/api-gateways/app.poke-api-gateway'
// import { AppPokeSpritesApiGateway } from '@app/api-gateways/app.poke-sprites-api-gateway'
import { IDtoPokemonList } from './pokemon.dto'

export async function getPokemons ({ limit = 0 }): Promise<IDtoPokemonList> {
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
  pokemonList.data.results.forEach((pokemon) => {
    // @ts-ignore: Object is possibly 'null'
    pokemon.id = pokemon.url.match(/\d+/g)[1] // x.match(/\d+/g)  ->  Get only numbers

    pokemon.img = `${process.env.REACT_APP_POKE_SPRITES_API_GATEWAY}/${pokemon.id}.png`

    return pokemon
  })

  return pokemonList.data
}

export async function getNextPrevPokemons ({ nextPrev = '' }): Promise<IDtoPokemonList> {
  const query = `?${nextPrev.split('?')[1]}`
  const pokemonList = await AppPokeApiGateway.get<IDtoPokemonList>(query)

  pokemonList.data.results.forEach((pokemon) => {
    if (!pokemon.id) {
      // @ts-ignore: Object is possibly 'null'
      pokemon.id = pokemon.url.match(/\d+/g)[1]
    }

    pokemon.img = `${process.env.REACT_APP_POKE_SPRITES_API_GATEWAY}/${pokemon.id}.png`

    return pokemon
  })

  return pokemonList.data
}
