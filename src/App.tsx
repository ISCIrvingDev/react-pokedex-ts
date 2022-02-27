import React from 'react'
import { Container, ThemeProvider, Toolbar } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppNavbar } from '@app/components/AppNavbar'
import { ViewPokedex } from '@mod/pokedex/ViewPokedex'
import { AppMainTheme } from '@app/themes/app.main-theme'
import { ViewPokemonDetails } from '@mod/pokemon-details/ViewPokemonDetails'

function App () {
  return (
    <ThemeProvider theme={AppMainTheme}>
      <Container maxWidth={false}>
        <Router>
          <AppNavbar />

          <Toolbar />

          <Route exact path='/' component={ViewPokedex} />
          <Route exact path='/pokemon/:id' component={ViewPokemonDetails} />
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
