import React from 'react';
import './app.module.css';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';

const App = () => {
   return (
      <>
         <Nav />
         <About />
         <Projects />
      </>
   );
};
export default App;
