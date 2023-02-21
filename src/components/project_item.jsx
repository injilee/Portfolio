import React from 'react';
import { LinkBtn, ProjectContent, ProjectSkills, Description } from '../styles/component/Project_item';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const ProjectItem = ({ item }) => {
   return (
      <ProjectContent>
         <img src={item.img} alt="프로젝트 대표 이미지" />
         <h3 aria-label="프로젝트 제목">{item.title}</h3>
         <ProjectSkills>
            <ul>
               {item['skill'].map((tool, index) => {
                  return <li key={index}>{tool}</li>;
               })}
            </ul>
            <Description>{item.description}</Description>
         </ProjectSkills>
         <LinkBtn>
            <a href={item.githubUrl} aria-label="프로젝트 깃허브 바로가기">
               <FaGithub className="btn" />
            </a>
            <a href={item.pageUrl} aria-label="프로젝트 사이트 바로가기">
               <FaGlobe className="btn" />
            </a>
         </LinkBtn>
      </ProjectContent>
   );
};

export default ProjectItem;
