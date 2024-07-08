/** @format */

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#20c20e', // Your primary color
    },
    secondary: {
      main: '#f50057', // Your secondary color
    },
    background: {
      default: '#000000', // Default background color
      paper: '#ffffff', // Background color for paper elements
      opacity: '0.5', // opacity of container background
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#20c20e', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace', // Default font family
    h4: {
      fontWeight: 700,
      letterSpacing: '.3rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
