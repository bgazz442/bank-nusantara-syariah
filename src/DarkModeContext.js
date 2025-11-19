import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light'); // 'light', 'dark', 'rgb'

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setThemeMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    document.body.classList.remove('light', 'dark', 'rgb');
    document.body.classList.add(themeMode);
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'rgb';
      return 'light';
    });
  };

  return (
    <DarkModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
