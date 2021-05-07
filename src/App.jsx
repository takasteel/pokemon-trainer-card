import { GlobalStyle } from './styles/global'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { PokemonContextProvider } from './hook/usePokemon';
import { MainContainer } from "./styles/styles";
import { PokemonForm } from "./components/PokemonForm";
import { TrainerCard } from "./components/TrainerCard";
import { ThemeContextProvider } from './hook/useTheme';

export function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#80c5dc',
      },
      secondary: {
        main: '#d41d1d',
      },
    },
  });


  return(
    <PokemonContextProvider>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <MainContainer>
            <PokemonForm/>
            <TrainerCard/>
          </MainContainer>
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContextProvider>
    </PokemonContextProvider>
  )
}
