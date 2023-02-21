import React from 'react';
import { NavBar, Header, Logo, MenuList } from '../styles/component/Nav';
import Theme from './theme';

const Nav = ({ darkModeHandler, darkMode }) => {
   return (
      <NavBar>
         <Header>
            <Logo>N</Logo>
            <Theme darkModeHandler={darkModeHandler} darkMode={darkMode} />
         </Header>
         <MenuList>
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
