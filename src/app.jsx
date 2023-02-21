import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './styles/component/Theme';
import GlobalStyles from './styles/GlobalStyle';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';

const App = () => {
   const [darkMode, setDarkMode] = useState(false);
   const darkModeHandler = () => {
      setDarkMode(!darkMode);
   };

   return (
      <ThemeProvider theme={darkMode ? LightTheme : DarkTheme}>
         <GlobalStyles />
         <Nav darkModeHandler={darkModeHandler} darkMode={darkMode} />
         <About darkMode={darkMode} />
         <Skills />
         <Projects />
      </ThemeProvider>
   );
};
export default App;
