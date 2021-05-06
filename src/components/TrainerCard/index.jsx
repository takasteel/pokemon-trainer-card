import { Button } from '@material-ui/core';
import { useRef, useState } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';

import { usePokemon } from '../../hook/usePokemon';
import { PokemonSlot } from '../PokemonSlot';

import { Container, Card, TeamContainer } from './styles';

export function TrainerCard() {
  const { pokemons, handleRemovePokemon } = usePokemon();  
  
  
  const cardRef = useRef();

  const [ trainer, setTrainer ] = useState("lucas.png");
  const changeTrainer = () => {
    trainer === "lucas.png" ? setTrainer("dawn.png") : setTrainer("lucas.png")
  }

  return(
    <>
      <Container ref={cardRef}>
        <Card>
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