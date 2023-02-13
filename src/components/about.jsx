import React from 'react';
import styles from '../styles/about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
const About = () => {
   return (
      <section className={styles.content}>
         <article className={`${styles.main} ${styles.box_wrap}`}>
            <h2 className={styles.tit}>About</h2>
            <p className={styles.produce}>꾸준히 성장해나가는 프론트엔드 개발자 </p>
            <div className={styles.description}>
               <img className={styles.profile_img} src="./image/inji_profile.jpg" alt="inji lee profile" />
               <div className={styles.contact}>
                  <strong className={styles.contact_job} aria-label="직업">
                     #FE
                  </strong>
                  <h3 className={styles.contact_name} aria-label="이름">
                     이인지
                  </h3>
                  <div className={styles.contact_detail}>
                     <strong className={styles.contact_detail_tit}>Contact</strong>
                     <span aria-label="전화번호">📞 010-2610-1667</span>
                     <span aria-label="이메일 주소">📧 lij8016@gmail.com</span>
                  </div>
                  <div className={styles.contact_channel}>
                     <a href="https://github.com/injilee" aria-label="깃허브 링크">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                     </a>
                     <span> | </span>
                     <a href="https://blog.naver.com/lij8016" aria-label="블로그 링크">
                        Blog
                     </a>
                  </div>
               </div>
            </div>
         </article>
         <article className={`${styles.skills} ${styles.box_wrap}`}>
            <h2 className={styles.skills_tit}>Skills</h2>
            <div className={styles.skills_container}>
               <ul className={styles.skill}>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>postCSS</li>
                  <li>Firebase</li>
               </ul>
               <div className={styles.division_line}></div>
               <ul className={styles.tool}>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Figma</li>
                  <li>Notion</li>
                  <li>Visual StudioCode</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe InDesign</li>
               </ul>
            </div>
         </article>
      </section>
   );
};

export default About;
