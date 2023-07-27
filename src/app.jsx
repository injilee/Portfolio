import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './styles/component/Theme';
import GlobalStyles from './styles/GlobalStyle';
import * as S from './styles/component/Styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import Theme from './components/theme';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';

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
         <S.Container>
            <S.Nav>
               <S.Logo>N</S.Logo>
               <S.Header>
                  <Theme darkModeHandler={darkModeHandler} darkMode={darkMode} />
                  <S.MenuBtn onClick={slideHandler}>
                     <GiHamburgerMenu></GiHamburgerMenu>
                  </S.MenuBtn>
               </S.Header>
               <S.MenuList open={open}>
                  <S.CloseIo onClick={slideHandler} open={open}>
                     <IoCloseSharp></IoCloseSharp>
                  </S.CloseIo>
                  <li onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                     <span>ABOUT</span>
                  </li>
                  <li onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                     <span>SKILLS</span>
                  </li>
                  <li onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                     <span>PROJECT</span>
                  </li>
               </S.MenuList>
            </S.Nav>
         </S.Container>
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
