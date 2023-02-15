import React from 'react';
import styles from '../styles/project_item.module.css';

const ProjectItem = ({ item }) => {
   return (
      <li className={styles.card}>
         <img src={item.img} alt="프로젝트 대표 이미지" className={styles.card_sumbnail} />
         <h3 aria-label="프로젝트 제목">{item.title}</h3>
         <div className={styles.skills}>
            <ul className={styles.skill_item}>
               {item['skill'].map((tool, index) => {
                  return <li key={index}>{tool}</li>;
               })}
            </ul>
         </div>
         <p aria-label="프로젝트 설명" className={styles.description}>
            {item.description}
         </p>
         <div className={styles.link_btn}>
            <a href={item.githubUrl} aria-label="프로젝트 깃허브 바로가기">
               <i className={`fa-solid fa-globe ${styles.btn}`}></i>
            </a>
            <a href={item.pageUrl} aria-label="프로젝트 사이트 바로가기">
               <i className={`fa-brands fa-github ${styles.btn}`}></i>
            </a>
         </div>
      </li>
   );
};

export default ProjectItem;
