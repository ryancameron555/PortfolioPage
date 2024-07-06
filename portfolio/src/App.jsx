/** @format */

import './App.css';
import ResponsiveAppBar from './components/navbar/Navbar';
import MatrixRain from './components/background/MatrixRain';
import AboutMe from './components/ContentContainers/AboutMe';

function App() {
  return (
    <>
      <MatrixRain />
      <div>
        <ResponsiveAppBar />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
