import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { EmptyPokemonDetails, IDtoPokemonDetails } from './pokemon-details.dto'
import { getPokemonDetails } from './repository'

const useStyles = makeStyles({
  root: {
    textTransform: 'capitalize',
    wordWrap: 'break-word'
  },
  img: {
    width: '50%',
    height: 'auto'
  },
  typesAbilities: {
    overflowY: 'scroll',
    maxHeight: '12rem'
  },
  moves: {
    overflowY: 'scroll',
    maxHeight: '32rem'
  }
})

interface IProps {
  // Los props siempre tienen que ser "string" debido a que eso es lo que "RouteComponentProps" espera
  id: string;
}

export const ViewPokemonDetails: React.FC<RouteComponentProps<IProps>> = ({ history, location, match, staticContext }) => {
  const classes = useStyles()

  const id = Number(match.params.id)

  const [pokemonDetails, setPokemonDetails] = useState<IDtoPokemonDetails>(EmptyPokemonDetails)

  useEffect(() => {
    getPokemonDetails({ id }).then(
      res => {
        setPokemonDetails(res)
      }
      // err => console.log('Error: ', err)
    )
  }, [])

  return (
    <Card elevation={20}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardContent style={{ paddingBottom: '0px' }}>
              <Typography className={classes.root} component="h2" variant="h4" align='center'>
                {pokemonDetails.name}
              </Typography>
            </CardContent>

            <div style={{ width: '100%' }}>
              <img src={pokemonDetails.sprites.backDefault} alt={pokemonDetails.name} className={classes.img}/>

              <img src={pokemonDetails.sprites.frontDefault} alt={pokemonDetails.name} className={classes.img}/>
            </div>

            <div style={{ width: '100%' }}>
              <img src={pokemonDetails.sprites.backShiny} alt={pokemonDetails.name} className={classes.img} />
              <img src={pokemonDetails.sprites.frontShiny} alt={pokemonDetails.name} className={classes.img} />
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={3}>
          <CardContent>
            <Typography component="h2" variant="h5">
              Types
            </Typography>
            {/* <Typography className={classes.root} component="p">
              { pokemonDetails.types.map(type => type.type.name).join(', ') }
            </Typography> */}
            <Typography component="div" className={`${classes.root} ${classes.typesAbilities}`}>
              <List component="nav">
                {
                  pokemonDetails.types.map((type, i) => {
                    return (
                      <ListItem button key={i}>
                        <ListItemIcon>
                          <FiberManualRecord style={{ fontSize: '0.7rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={type.type.name} />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Typography>

            <Typography component="h2" variant="h5">
              Abilities
            </Typography>
            {/* <Typography className={classes.root} component="p">
              { pokemonDetails.abilities.map(ability => ability.ability.name).join(', ') }
            </Typography> */}
            <Typography component="div" className={`${classes.root} ${classes.typesAbilities}`}>
              <List component="nav">
                {
                  pokemonDetails.abilities.map((ability, i) => {
                    return (
                      <ListItem button key={i}>
                        <ListItemIcon>
                          <FiberManualRecord style={{ fontSize: '0.7rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={ability.ability.name} />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Typography>

            <Typography component="h2" variant="h5">
              Height
            </Typography>
            <Typography component="p">
              { pokemonDetails.height }
            </Typography>

            <Typography component="h2" variant="h5">
              Weight
            </Typography>
            <Typography component="p">
              { pokemonDetails.weight }
            </Typography>

            <Typography component="h2" variant="h5">
              Base Experience
            </Typography>
            <Typography component="p">
              { pokemonDetails.baseExperience }
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Typography component="h2" variant="h5" align='center'>
            Moves
          </Typography>
          <Typography component="div" className={`${classes.root} ${classes.moves}`}>
            <List component="nav">
            {
              pokemonDetails.moves.map((move, i) => {
                return (
                  <ListItem button key={i}>
                    <ListItemIcon>
                      <FiberManualRecord style={{ fontSize: '0.7rem' }} />
                    </ListItemIcon>
                    <ListItemText primary={move.move.name} />
                  </ListItem>
                )
              })
            }
            </List>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
