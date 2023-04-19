import React from 'react';
import * as S from '../styles/component/Project';
import data from '../router/data.json';
import ProjectItem from './project_item';

const Projects = () => {
   return (
      <S.ProjectContent>
         <article>
            <h2>Projects</h2>
            <S.CardContainer>
               {data.projectsData.map(item => (
                  <ProjectItem item={item} key={item.id} />
               ))}
            </S.CardContainer>
         </article>
      </S.ProjectContent>
   );
};

export default Projects;
