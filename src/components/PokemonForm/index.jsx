import { Button, TextField } from '@material-ui/core';
import { Autocomplete } from "@material-ui/lab";
import { pokem } from '../../pokemons';
import { usePokemon } from '../../hook/usePokemon';

import { Container } from './styles';

export function PokemonForm() {
  const { isDisabled, isLoading, handleChange, handleSubmit, typedPokemon} = usePokemon();

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
          clearOnEscape={true}
          clearOnBlur={false}
          autoSelect={true}
          inputValue={typedPokemon}
          onInputChange={handleChange}
          onClose={() => console.log("close")}
          // disabled={isDisabled}
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