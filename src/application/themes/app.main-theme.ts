import { createTheme } from '@material-ui/core'
import { blue, lightBlue } from '@material-ui/core/colors'

export const AppMainTheme = createTheme({
  palette: {
    primary: blue,
    secondary: lightBlue
    // text: {
    //   primary: 'rgba(0, 0, 0, 0.87)',
    //   secondary: '#00e676'
    // }
  }
})

export const AppColors = {
  bgColor: '#f2f2f2'
}

export const AppGradientColors = {
  terminal: 'linear-gradient(to left, #000000, #0f9b0f)',
  midnightCity: 'linear-gradient(to left, #232526, #414345)',
  coolBlues: 'linear-gradient(to right, #2193b0, #6dd5ed)'
}
