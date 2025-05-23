import { createTheme } from '@mui/material/styles';
import { PaletteColorOptions, PaletteColor } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
  interface TypeBackground {
    soft?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
      light: '#a5d6a7',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6d4c41',
      light: '#a1887f',
      dark: '#4e342e',
      contrastText: '#ffffff',
    },
    tertiary: {
      main: '#fdd835',
      light: '#fff59d',
      dark: '#c6a700',
      contrastText: '#212121',
    },
    background: {
      default: '#F8F5F0',
      paper: '#ffffff',
      soft: '#e8f5e9',
    },
    text: {
      primary: '#111213',
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
});

export default theme;
