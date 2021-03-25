import { PokemonListProvider } from './context/PokemonListContext'
import { Main } from "./components/Main";

import { GlobalStyle } from './styles/global'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'

export function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#80c5dc',
      },
      secondary: {
        main: '#d65f38',
      },
    },
  });


  return(
    <PokemonListProvider>
      <ThemeProvider theme={theme}>
        <Main />
        <GlobalStyle />
      </ThemeProvider>
    </PokemonListProvider>
  )
}
