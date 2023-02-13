import React from 'react';
import styles from '../styles/project_item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faGlobe);

const ProjectItem = ({ item }) => {
   console.log(item);
   return (
      <li className={styles.card}>
         <img src={item.img} alt="프로젝트 대표 이미지" className={styles.card_sumbnail} />
         <h3 aria-label="프로젝트 제목">{item.title}</h3>
         <div className={styles.skills}>
            <ul className={styles.skill_item}>
               {item['skill'].map(tool => {
                  return <li>{tool}</li>;
               })}
            </ul>
         </div>
         <p aria-label="프로젝트 설명" className={styles.description}>
            {item.description}
         </p>
         <div className={styles.link_btn}>
            <a href={item.githubUrl} aria-label="프로젝트 깃허브 바로가기">
               <FontAwesomeIcon icon={faGithub} className={styles.btn} />
            </a>
            <a href={item.pageUrl} aria-label="프로젝트 사이트 바로가기">
               <FontAwesomeIcon icon={faGlobe} className={styles.btn} />
            </a>
         </div>
      </li>
   );
};

export default ProjectItem;
