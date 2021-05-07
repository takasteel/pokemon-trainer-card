import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export function CharacterContextProvider({ children }) {
  const [char, setChar] = useState("0");

  function changeChar(char) {
    setChar(char);
  }
  return(
    <CharacterContext.Provider value={{
      char,
      changeChar,
    }}>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => {
  return useContext(CharacterContext);
}