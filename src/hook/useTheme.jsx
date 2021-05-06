import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider ({ children }) {
  const themes = [
    'blue',
    'orange',
    'brown',
    'green',
    'purple',
    'yellow',
    'grey',
    'pink',
  ];
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  function changeTheme(theme) {
    setCurrentTheme(theme)
  }

  return(
    <ThemeContext.Provider value={{
      themes,
      currentTheme,
      setCurrentTheme,
      changeTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
}