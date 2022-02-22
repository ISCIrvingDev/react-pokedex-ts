import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { AppGradientColors } from '@app/themes/app.main-theme'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: AppGradientColors.coolBlues
  },
  links: {
    textDecoration: 'none',
    color: 'white'
  }
}))

export const AppNavbar: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position='fixed' variant='elevation'>
      <Toolbar>
        <Typography style={{ marginRight: '1rem' }}>
          <img src={process.env.REACT_APP_FRAMEWORK_ICON} alt="React" width="24" height="24" />
        </Typography>

        <Typography>
          <Link to='/' className={classes.links}>
            Pokedex
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
