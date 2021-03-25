import { useState, createContext } from 'react';
export const PokemonListContext = createContext();

export function PokemonListProvider({children}) {
  const [pokemons, setPokemons] = useState([]);  
  return(
    <PokemonListContext.Provider value={
      {
        pokemons,
        setPokemons,
      }
    }>
      {children}
    </PokemonListContext.Provider>
  );
}

