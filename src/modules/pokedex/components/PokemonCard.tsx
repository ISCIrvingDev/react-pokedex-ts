import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  CardMedia,
  // Button,
  Typography
} from '@material-ui/core'
// import { AppColors } from '@app/themes/app.main-theme'

const useStyles = makeStyles({
  root: {
    // backgroundColor: AppColors.bgColor
    textTransform: 'capitalize',
    wordWrap: 'break-word'
  }
})

interface IProps {
  img: string;
  title: string;
  description?: string;
  link?: string;
  actions?: IActions<void>[];
}
interface IActions<T> {
  label: string,
  action: () => T
}

// export const PokemonCard: React.FC<IProps> = (props: IProps) => {
export const PokemonCard: React.FC<IProps> = ({ img, title, description, link, actions }) => {
  const classes = useStyles()
  // const { name } = props

  return (
    <Card elevation={20}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography className={classes.root} component="h2" variant="h6" gutterBottom align='center'>
            {title}
          </Typography>
          {/* <Typography className={classes.root} variant="body2" color="textSecondary" component="p">
            { description }
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary" variant='contained'>
          Share
        </Button>
        <Button size="small" color="secondary" variant='outlined'>
          Learn
        </Button>
      </CardActions> */}
    </Card>
  )
}

// export default PokemonCard
