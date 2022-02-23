import React, { useEffect, useState/*, lazy, Suspense */ } from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import { getNextPrevPokemons, getPokemons } from './repository'
import { IDtoPokemonList } from './pokemon.dto'
import { AppCard } from '@app/components/AppCard'
// const AppCard = lazy(() => import('@app/components/AppCard'))
import { Pagination } from './components/Pagination'

export const ViewPokedex: React.FC<{}> = () => {
  const [pokemons, setPokemons] = useState<IDtoPokemonList>({ count: 0, results: [] })
  const [limit, setLimit] = useState(25)
  // let totalPages = 0
  let currentPage = 0

  useEffect(() => {
    getPokemons({ limit }).then(
      res => {
        setPokemons(res)
        // totalPages = pokemons.count / limit
      }
      // err => console.log('Error: ', err)
    )
  }, [limit])

  return (
    <Grid container>
      {
        pokemons.results.length > 0
          ? <Grid container spacing={3}>
            {
              pokemons.results.map((pokemon, i) =>
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
              <Pagination
                initRowsPerPage={limit}
                emitRowsPerPage={(newRowsPerPage) => setLimit(newRowsPerPage)}
                count={pokemons.count}
                emitPage={(newPage) => {
                  const query = currentPage < newPage ? pokemons.next : pokemons.previous

                  currentPage = newPage

                  getNextPrevPokemons({ nextPrev: query }).then(
                    res => setPokemons(res)
                  )
                }}
              />
            </Grid>
          </Grid>
          : <Grid container style={{ marginTop: '1rem' }} justifyContent="center" alignItems="center">
              <CircularProgress/>
            </Grid>
      }
    </Grid>
  )
}
