import { Button, TextField } from '@material-ui/core';
import { Autocomplete } from "@material-ui/lab";
import { pokem } from '../../pokemons';
import { usePokemon } from '../../hook/usePokemon';
import { useState } from 'react';

import { Container } from './styles';

export function PokemonForm() {
  const { isDisabled, isLoading, getPokemon, teste, setTeste} = usePokemon();
  const [typedPokemon, setTypedPokemon] = useState('');

  const handleChange = (event, newEvent) => {
    setTeste(newEvent)
    setTypedPokemon(newEvent)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!teste) {
      return;
    }
    // setTeste(typedPokemon)
    getPokemon();
  }

  return(
    <Container>
      <h1>Pokemon Trainer Card</h1>
      <p className="description">
        Type a pokemon name to add to your team!
      </p>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          options={pokem}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          clearOnEscape={false}
          clearOnBlur={false}
          autoSelect={true}
          inputValue={typedPokemon}
          onInputChange={handleChange}
          value={typedPokemon}
          disabled={isDisabled}
          renderInput={(params) => <TextField {...params} label="Type a pokemon" variant="outlined" />}
        />
        <Button
          variant="contained" 
          color="secondary"
          type="submit"
          disabled={isDisabled}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
            Search
            </>
          )}
        </Button>
      </form>
    </Container>
  );
}