import React, { useState } from 'react';
import { NavBar, Header, Logo, MenuList, MenuBtn, CloseIo } from '../styles/component/Nav';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import Theme from './theme';

const Nav = ({ darkModeHandler, darkMode }) => {
   const [open, setSlide] = useState(false);
   const slideHandler = () => {
      setSlide(!open);
   };

   return (
      <NavBar>
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
            <li>
               <span>ABOUT</span>
            </li>
            <li>
               <span>PROJECT</span>
            </li>
         </MenuList>
      </NavBar>
   );
};

export default Nav;
