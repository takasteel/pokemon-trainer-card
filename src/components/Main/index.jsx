import { useState, useContext, useEffect } from "react";
import { TrainerCard } from "../TrainerCard";
import { PokemonListContext } from '../../context/PokemonListContext';
import { Button, TextField } from '@material-ui/core';

import { api } from '../../services/api';
  
import { MainContainer } from './styles';

export function Main() {
  const { pokemons, setPokemons } = useContext(PokemonListContext)

  const [typedPokemon, setTypedPokemon] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisable] = useState(false);

  useEffect(() => {
    pokemons.length === 6 ? setIsDisable(true) : setIsDisable(false)
  }, [pokemons.length])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!typedPokemon) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.get(`/pokemon/${typedPokemon.toLowerCase()}`);
      setPokemons(prevPokemon => [...prevPokemon, response.data]);   
      setError(null);
      setIsLoading(false);
      setTypedPokemon('');
    } catch (error) {
      setError('Pokemon was not found!');
      setIsLoading(false);
      console.error(error)
    }
  };

  const handleChange = (event) => {
    setTypedPokemon(event.target.value)
  }

  return (
    <MainContainer>
      <h1>Pokemon Trainer Card</h1>
      <p className="description">
        Type a pokemon name to add to your team!
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          error={error && true}
          color="primary"
          label="Pokemon name"
          variant="outlined"
          value={typedPokemon}
          onChange={handleChange}
          helperText={error && error}
        />
        <Button
          className="btn-search"
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
      <TrainerCard />
    </MainContainer>
  );
}