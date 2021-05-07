import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export function CharacterContextProvider({ children }) {
  const [char, setChar] = useState("0");
  const [isLoading, setIsLoading] = useState(false);

  function changeChar(char) {
    setIsLoading(true);
    setChar(char);
  }
  return(
    <CharacterContext.Provider value={{
      char,
      changeChar,
      isLoading,
      setIsLoading,
    }}>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => {
  return useContext(CharacterContext);
}