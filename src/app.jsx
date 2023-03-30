import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './styles/component/Theme';
import GlobalStyles from './styles/GlobalStyle';
import { Nav, Header, Logo, MenuList, MenuBtn, CloseIo, Container } from './styles/component/Styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import Theme from './components/theme';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Perks from './components/perks';

const App = () => {
   const aboutRef = useRef([]);
   const skillsRef = useRef([]);
   const projectsRef = useRef([]);

   const [darkMode, setDarkMode] = useState(false);
   const [open, setSlide] = useState(false);

   const darkModeHandler = () => {
      setDarkMode(!darkMode);
   };

   const slideHandler = () => {
      setSlide(!open);
   };

   return (
      <ThemeProvider theme={darkMode ? LightTheme : DarkTheme}>
         <GlobalStyles />
         <Container>
            <Nav>
               <Logo>N</Logo>
               <Header>
                  <Theme darkModeHandler={darkModeHandler} darkMode={darkMode} />
                  <MenuBtn onClick={slideHandler}>
                     <GiHamburgerMenu></GiHamburgerMenu>
                  </MenuBtn>
               </Header>
               <MenuList open={open}>
                  <CloseIo onClick={slideHandler} open={open}>
                     <IoCloseSharp></IoCloseSharp>
                  </CloseIo>
                  <li onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                     <span>ABOUT</span>
                  </li>
                  <li onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                     <span>SKILLS</span>
                  </li>
                  <li onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                     <span>PROJECT</span>
                  </li>
               </MenuList>
            </Nav>
         </Container>
         <Perks />
         <div ref={aboutRef}>
            <About />
         </div>
         <div ref={skillsRef}>
            <Skills />
         </div>
         <div ref={projectsRef}>
            <Projects />
         </div>
      </ThemeProvider>
   );
};
export default App;
