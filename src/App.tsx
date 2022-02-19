import React from 'react'
import { Container, ThemeProvider } from '@material-ui/core'
import { AppMainTheme } from '@app/themes/app.main-theme'

function App () {
  return (
    <ThemeProvider theme={AppMainTheme}>
      <Container maxWidth={false}>
        Contenido
      </Container>
    </ThemeProvider>
  )
}

export default App
