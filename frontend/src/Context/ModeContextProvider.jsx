import React, { useState, useEffect } from 'react';
import ModeContext from './ModeContext'; // Assuming ModeContext is defined elsewhere

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem('appMode');
    return storedMode ? storedMode : 'light'; // Default to light mode
  });

  // Update local storage whenever mode changes
  useEffect(() => {
    localStorage.setItem('appMode', mode);
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  const contextValue = {
    mode,
    setMode,
    toggleMode, // Expose the toggle function as well
  };

  return (
    <ModeContext.Provider value={contextValue}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
