import React from 'react';
import './app.module.css';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';
import projectsData from './router/data.json';

const App = () => {
   return (
      <>
         <Nav />
         <About />
         <Projects data={projectsData} />
      </>
   );
};
export default App;
