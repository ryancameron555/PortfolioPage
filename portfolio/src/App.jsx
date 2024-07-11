/** @format */

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import theme from './Styling/theme';
import ResponsiveAppBar from './components/navbar/Navbar';
import MatrixRain from './components/background/MatrixRain';
import AboutMe from './components/Content/AboutMe';
import CardContainer from './components/containers/CardContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MatrixRain />
      <ResponsiveAppBar />
      <AboutMe />
      <CardContainer />
    </ThemeProvider>
  );
}

export default App;
