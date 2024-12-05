import React, { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Provide the Theme Context
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for accessing theme context
export const useTheme = () => useContext(ThemeContext);
