import React from 'react'
import { Container, ThemeProvider, Toolbar } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppNavbar } from './application/components/AppNavbar'
import { ViewPokedex } from './modules/pokedex/ViewPokedex'
import { AppMainTheme } from '@app/themes/app.main-theme'

function App () {
  return (
    <ThemeProvider theme={AppMainTheme}>
      <Container maxWidth={false}>
        <Router>
          <AppNavbar />

          <Toolbar />

          <Route path='/' component={ViewPokedex} />
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
