import { GlobalStyle } from './styles/global'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { PokemonContextProvider } from './hook/usePokemon';
import { MainContainer } from "./styles";
import { PokemonForm } from "./components/PokemonForm";
import { TrainerCard } from "./components/TrainerCard";

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
      <ThemeProvider theme={theme}>
        <MainContainer>
          <PokemonForm/>
          <TrainerCard/>
        </MainContainer>
        <GlobalStyle />
      </ThemeProvider>
    </PokemonContextProvider>
  )
}
