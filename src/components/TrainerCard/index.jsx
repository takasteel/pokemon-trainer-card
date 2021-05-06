import { Button } from '@material-ui/core';
import { useRef, useState } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';

import { usePokemon } from '../../hook/usePokemon';
import { useTheme } from '../../hook/useTheme';
import { PokemonSlot } from '../PokemonSlot';
import { ThemeOptions } from '../ThemeOptions';

import { Container, Card, TeamContainer, ThemeContainer } from './styles';

export function TrainerCard() {
  const { pokemons, handleRemovePokemon } = usePokemon();  
  const { currentTheme, themes, changeTheme } = useTheme();
  
  const cardRef = useRef();

  const [ trainer, setTrainer ] = useState("lucas.png");
  const changeTrainer = () => {
    trainer === "lucas.png" ? setTrainer("dawn.png") : setTrainer("lucas.png")
  }

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
            <div 
              className='trainer-image'
              onClick={() => changeTrainer()}
            >
              <img src={trainer} alt="Lucas"/>
            </div>
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
        onClick={() => exportComponentAsPNG(cardRef, {html2CanvasOptions: {backgroundColor: null}})}
      >
        Save Trainer Card
      </Button>
    </>
  );
}