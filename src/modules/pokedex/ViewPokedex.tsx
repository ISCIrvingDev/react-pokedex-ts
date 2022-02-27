import React, { useEffect, useState/*, lazy, Suspense */ } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getNextPrevPokemons, getPokemons } from './repository'
import { IDtoPokemonList } from './pokemon.dto'
// const PokemonCard = lazy(() => import('@app/components/PokemonCard'))
import { PokemonCard } from './components/PokemonCard'
import { Pagination } from './components/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none'
  }
}))

export const ViewPokedex: React.FC<{}> = () => {
  const classes = useStyles()

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
              pokemons.results.map(pokemon =>
                <Grid key={pokemon.id} item xs={12} sm={2}>
                  {/* <Suspense fallback={<div>...</div>}> */}
                  <Link to={`/pokemon/${pokemon.id}`} className={classes.root}>
                      <PokemonCard img={pokemon.img || ''} title={pokemon.name} description={pokemon.url}/>
                    </Link>
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
