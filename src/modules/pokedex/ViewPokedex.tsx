import React, { useEffect, useState/*, lazy, Suspense */ } from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import { getPokemons } from './repository'
import { IDtoPokemon } from './pokemon.dto'
import { AppCard } from '@app/components/AppCard'
// const AppCard = lazy(() => import('@app/components/AppCard'))
import { Pagination } from './components/Pagination'

export const ViewPokedex: React.FC<{}> = () => {
  const [limit, setLimit] = useState(25)
  const [pokemons, setPokemons] = useState<IDtoPokemon[]>([])

  useEffect(() => {
    getPokemons({ limit }).then(
      res => setPokemons(res)
      // err => console.log('Error: ', err)
    )
  }, [limit])

  return (
    <Grid container>
      {
        pokemons.length > 0
          ? <Grid container spacing={3}>
            {
              pokemons.map((pokemon, i) =>
                <Grid key={i} item xs={12} sm={2}>
                  {/* <Suspense fallback={<div>...</div>}> */}
                    <AppCard img={pokemon.img || ''} title={pokemon.name} description={pokemon.url}/>
                  {/* </Suspense> */}
                </Grid>
              )
            }

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Pagination initRowsPerPage={limit} setInitRowsPerPage={(newLimit) => setLimit(newLimit)}/>
            </Grid>
          </Grid>
          : <Grid container style={{ marginTop: '1rem' }} justifyContent="center" alignItems="center">
              <CircularProgress/>
            </Grid>
      }
    </Grid>
  )
}
