import { createContext, useContext } from 'react';

const CharacterContext = createContext();

export function CharacterContextProvider({ children }) {
  return(
    <CharacterContext.Provider>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => {
  return useContext(CharacterContext);
}