/** @format */

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import theme from './Styling/theme';
import ResponsiveAppBar from './components/navbar/Navbar';
import MatrixRain from './components/background/MatrixRain';
import AboutMe from './components/Content/AboutMe';
import CardContainer from './components/containers/CardContainer';
import CertsContainer from './components/containers/CertsContainer';
import ContactContainer from './components/containers/ContactContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MatrixRain />
      <ResponsiveAppBar />
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <CardContainer />
      </div>
      <div id="documents">
        <CertsContainer />
      </div>
      <div id="contact">
        <ContactContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
