import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const PokemonContext = createContext();

export function PokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);  
  const [isDisabled, setIsDisable] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typedPokemon, setTypedPokemon] = useState('');

  const handleRemovePokemon = (slot) => {
    setPokemons(pokemons.filter((pokemon) => pokemon !== pokemons[slot]))    
  }

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

  const handleChange = (event, newEvent) => {
    setTypedPokemon(newEvent)
  }


  return(
    <PokemonContext.Provider value={{
      pokemons,
      setPokemons,
      handleRemovePokemon,
      isDisabled,
      error,
      isLoading,
      handleSubmit,
      handleChange,
      typedPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  return useContext(PokemonContext);
}