import React from 'react';
import { LinkBtn, ProjectList, ProjectSkills, Description } from '../styles/component/Project_item';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import ScrollFadeIn from './hooks/ScrollFadeIn';

const ProjectItem = ({ item }) => {
   const animatedItem = {
      0: ScrollFadeIn('upProject', 1, 0),
   };
   return (
      <ProjectList {...animatedItem[0]}>
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
      </ProjectList>
   );
};

export default ProjectItem;
