import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { darkMode, lightMode, GlobalStyles } from './themes';

import './App.scss';


function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={isDarkModeOn ? darkMode : lightMode}>
          <GlobalStyles />
          <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
