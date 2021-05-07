import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export function CharacterContextProvider({ children }) {
  const [char, setChar] = useState("0");
  const [isCharacterLoading, setIsCharacterLoading] = useState(false);

  function changeChar(char) {
    setIsCharacterLoading(true);
    setChar(char);
  }
  return(
    <CharacterContext.Provider value={{
      char,
      changeChar,
      isCharacterLoading,
      setIsCharacterLoading,
    }}>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => {
  return useContext(CharacterContext);
}