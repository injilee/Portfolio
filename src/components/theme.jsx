import React, { useRef } from 'react';
import styles from '../styles/theme.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const Theme = () => {
   const darkRef = useRef();
   const lightRef = useRef();

   const setDark = () => {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
   };

   const setLight = () => {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
   };

   const storedTheme = () => {
      localStorage.getItem('theme');
   };

   const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;

   // 사용자가 설정했던 theme 적용
   const defalutDark = storedTheme === 'dark' || (storedTheme === null && preferDark);

   if (defalutDark) {
      setDark();
   }

   // 사용자가 아이콘 눌렀을 때 theme 설정
   const toggleTheme = e => {
      if (e.target.className === darkRef.current.className) {
         setDark();
      } else if (e.target.className === lightRef.current.className) {
         setLight();
      }
   };

   return (
      <div className={styles.theme}>
         <button className={styles.light} onClick={toggleTheme} ref={lightRef}>
            <span className={styles.screen_out}>다크모드로 변경하기</span>
            <FaMoon />
         </button>
         <button className={styles.dark} onClick={toggleTheme} ref={darkRef}>
            <span className={styles.screen_out}>라이트모드로 변경하기</span>
            <FaSun />
         </button>
      </div>
   );
};

export default Theme;
