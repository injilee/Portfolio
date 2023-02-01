import React from 'react';
import styles from '../styles/nav.module.css';
import Theme from './theme';

const Nav = () => {
   return (
      <nav className={styles.nav}>
         <header className={styles.nav_header}>
            <h1>
               <a href="home" className={styles.home_link}>
                  <span className={styles.logo}>N</span>
               </a>
            </h1>
            <Theme />
         </header>
         <ul className={styles.menu}>
            <li className={styles.menu_li}>
               <a href="#none">ABOUT</a>
            </li>
            <li className={styles.menu_li}>
               <a href="#none">PROJECT</a>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
