import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import { darkMode, lightMode, GlobalStyles } from './themes';

import './App.scss';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Networking from './components/Networking';

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={isDarkModeOn ? darkMode : lightMode}>
          <GlobalStyles />
          <Networking />
          <div className="main">
            <Header
              isDarkModeOn={isDarkModeOn}
              setIsDarkModeOn={setIsDarkModeOn}
            />
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Contact />
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
