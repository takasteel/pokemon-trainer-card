import { Button } from '@material-ui/core';
import { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';

import { usePokemon } from '../../hooks/usePokemon';
import { useTheme } from '../../hooks/useTheme';
import { useCharacter } from '../../hooks/useCharacter';
import { CharacterOptions } from '../CharacterOptions';
import { PokemonSlot } from '../PokemonSlot';
import { ThemeOptions } from '../ThemeOptions';

import { Container, Card, TeamContainer, ThemeContainer } from './styles';

import { CharacterImage } from '../CharacterImage';

export function TrainerCard() {
  const { pokemons, handleRemovePokemon } = usePokemon();  
  const { currentTheme, themes, changeTheme } = useTheme();
  const cardRef = useRef();

  return(
    <>
      <Container ref={cardRef}>
        <Card theme={currentTheme}>
          <div className='inner-container'>
            <div className='trainer-info-container'>
              <div className='trainer-info-name'>
                <h3>Trainer name</h3>
                <input 
                  type="name"
                />

              </div>
              <hr/>
              <div className='trainer-info-code'>
                <h3>Friend Code </h3>
                <input 
                  type="text"
                />
              </div>
              <hr/>
            </div>
            
            <CharacterImage/>

            <TeamContainer>
              {pokemons.map((pokemon, slot) => (
                <PokemonSlot
                  onClick={() => handleRemovePokemon(slot)}
                  key={pokemon.id * Math.random()}
                  name={pokemon.name}
                  spriteUrl={pokemon.sprites.other['official-artwork']['front_default']}
                />
              ))}
            </TeamContainer>
          </div>
        </Card>
      </Container>
      
      <CharacterOptions/>

      <ThemeContainer>
        {themes.map((theme, index) => (
          <ThemeOptions 
            key={theme} 
            theme={themes[index]} 
            onClick={() => changeTheme(theme)}
          />
        ))}
      </ThemeContainer>
      
      <Button
        variant="contained" 
        color="secondary"
        type="submit"
        onClick={() => exportComponentAsPNG(cardRef, {fileName: "trainer-card", html2CanvasOptions: {backgroundColor: null}})}
      >
        Save Trainer Card
      </Button>
    </>
  );
}