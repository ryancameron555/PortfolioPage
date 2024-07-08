/** @format */

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#20c20e', // Your primary color for matrix
    },
    secondary: {
      main: '#f50057', // Your secondary color for matrix
    },
    background: {
      default: '#000000', // Default background color
      paper: '#ffffff', // Background color for paper elements
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#20c20e', // Secondary text color for matrix
    },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace', // Default font family
    h1: {
      fontSize: '3rem',
      fontFamily: 'inherit',
      fontWeight: 700,
      letterSpacing: '0.5rem',
    },
    h2: {
      fontSize: '2.5rem',
      fontFamily: 'inherit',
      fontWeight: 700,
      letterSpacing: '.3rem',
    },
    h4: {
      fontSize: '2rem',
      fontFamily: 'inherit',
      fontWeight: 700,
      letterSpacing: '.1rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
