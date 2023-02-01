import React from 'react';
import styles from '../styles/theme.module.css';

const Theme = () => {
   return (
      <div className={styles.theme}>
         <button className={styles.light}>
            {/* <span aria-label="screen_out">다크모드로 변경하기</span> */}
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="28"
               height="28"
               viewBox="0 0 24 24"
               fill="none"
               stroke="#ffffff"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <circle cx="12" cy="12" r="5" />
               <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
         </button>
         <button className={styles.dark}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="28"
               height="28"
               viewBox="0 0 24 24"
               fill="none"
               stroke="#ffffff"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
         </button>
      </div>
   );
};

export default Theme;
