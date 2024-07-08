/** @format */

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import theme from './Styling/theme';
import ResponsiveAppBar from './components/navbar/Navbar';
import MatrixRain from './components/background/MatrixRain';
import AboutMe from './components/ContentContainers/AboutMe';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MatrixRain />
      <div>
        <ResponsiveAppBar />
        <AboutMe />
      </div>
    </ThemeProvider>
  );
}

export default App;
