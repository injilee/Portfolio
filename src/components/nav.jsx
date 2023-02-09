import React from 'react';
import styles from '../styles/nav.module.css';
import Theme from './theme';

const Nav = () => {
   return (
      <nav className={styles.nav}>
         <header className={styles.nav_header}>
            <h1 aria-label="이인지 포트폴리오 로고">
               <span className={styles.logo}>N</span>
            </h1>
            <Theme />
         </header>
         <ul className={styles.menu}>
            <li className={styles.menu_li}>
               <span>ABOUT</span>
            </li>
            <li className={styles.menu_li}>
               <span>PROJECT</span>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
