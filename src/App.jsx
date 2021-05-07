import { GlobalStyle } from './styles/global'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { PokemonContextProvider } from './hooks/usePokemon';
import { MainContainer } from "./styles/styles";
import { PokemonForm } from "./components/PokemonForm";
import { TrainerCard } from "./components/TrainerCard";
import { ThemeContextProvider } from './hooks/useTheme';
import { CharacterContextProvider } from './hooks/useCharacter';

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
        <CharacterContextProvider>
          <ThemeProvider theme={theme}>
            <MainContainer>
              <PokemonForm/>
              <TrainerCard/>
            </MainContainer>
            <GlobalStyle />
          </ThemeProvider>
        </CharacterContextProvider>
      </ThemeContextProvider>
    </PokemonContextProvider>
  )
}
