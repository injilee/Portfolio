import React from 'react';
import { CardContainer, ProjectContent } from '../styles/component/Project';
import data from '../router/data.json';
import ProjectItem from './project_item';

const Projects = () => {
   return (
      <ProjectContent>
         <article>
            <h2>Projects</h2>
            <CardContainer>
               {data.projectsData.map(item => (
                  <ProjectItem item={item} key={item.id} />
               ))}
            </CardContainer>
         </article>
      </ProjectContent>
   );
};

export default Projects;
