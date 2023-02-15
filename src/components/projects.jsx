import React from 'react';
import styles from '../styles/projects.module.css';
import ProjectItem from './project_item';
import data from '../router/data.json';

const Projects = () => {
   return (
      <section className={styles.content}>
         <article className={`${styles.main} ${styles.box_wrap}`}>
            <h2 className={styles.tit}>Projects</h2>
            <ul className={styles.card_container}>
               {data.projectsData.map(item => (
                  <ProjectItem item={item} key={item.id} />
               ))}
            </ul>
         </article>
      </section>
   );
};

export default Projects;
