import React, { useEffect, useState/*, lazy, Suspense */ } from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import { getPokemons } from './repository'
import { IDtoPokemon } from './pokemon.dto'
import { AppCard } from '@app/components/AppCard'
// const AppCard = lazy(() => import('@app/components/AppCard'))

export const ViewPokedex: React.FC<{}> = () => {
  const [pokemons, setPokemons] = useState<IDtoPokemon[]>([])

  useEffect(() => {
    getPokemons({ limit: 30 }).then(
      res => setPokemons(res)
      // err => console.log('Error: ', err)
    )
  }, [])

  return (
    <Grid container spacing={3}>
      {
        pokemons.length > 0
          ? pokemons.map((pokemon, i) =>
            <Grid key={i} item xs={12} sm={2}>
              {/* <Suspense fallback={<div>...</div>}> */}
                <AppCard img={pokemon.img || ''} title={pokemon.name} description={pokemon.url}/>
              {/* </Suspense> */}
            </Grid>
          )
          : <Grid container style={{ marginTop: '1rem' }} justifyContent="center" alignItems="center">
              <CircularProgress/>
            </Grid>
      }
    </Grid>
  )
}
