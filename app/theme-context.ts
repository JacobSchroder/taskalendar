import { createContext } from 'react';

export const themeContext = createContext<'light' | 'dark'>('dark');
