import { createContext } from 'react';

// This file only exports the raw context object.
// No logic goes here to avoid Fast Refresh errors.
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});