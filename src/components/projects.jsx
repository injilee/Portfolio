import React from 'react';
import styles from '../styles/projects.module.css';

const Projects = () => {
   return (
      <section className={styles.projects_content}>
         <article className={styles.projects_main}>
            <h2 className={styles.projects_tit}>Projects</h2>
            <div className={styles.project_card}>
               <div className="card1">
                  <div className={styles.project_img}>
                     {/* <img src="pet_license_maker.png" alt="프로젝트 이미지" /> */}
                  </div>
                  <span aria-label="프로젝트 제목">Natural-Archive</span>
                  <p aria-label="프로젝트 설명">프로젝트 설명</p>
                  <a href="#none" aria-label="프로젝트 사이트 바로가기">
                     demo
                  </a>
                  <a href="#none" aria-label="프로젝트 깃허브 바로가기">
                     github
                  </a>
               </div>
            </div>
         </article>
      </section>
   );
};

export default Projects;
