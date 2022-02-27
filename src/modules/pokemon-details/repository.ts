import { AppPokeApiGateway } from '@app/api-gateways/app.poke-api-gateway'
import { AppObjectUtils } from '@app/utils/app.object-utils'
import { IDtoPokemonDetails } from './pokemon-details.dto'

export async function getPokemonDetails ({ id = 0 }): Promise<IDtoPokemonDetails> {
  const response = await AppPokeApiGateway.get<IDtoPokemonDetails>(`/${id}`)

  const pokemonList = AppObjectUtils.toCamelCase(response.data) as IDtoPokemonDetails

  return pokemonList
}
