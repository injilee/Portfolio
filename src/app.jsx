import React from 'react';
import './app.module.css';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';
import GlobalStyles from './styles/GlobalStyle';
import Skills from './components/skills';

const App = () => {
   return (
      <>
         <GlobalStyles />
         <Nav />
         <About />
         <Skills />
         <Projects />
      </>
   );
};
export default App;
