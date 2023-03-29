import React from 'react';
import { BoxWrap, Title } from '../styles/BoxWrap';
import { SkillMain, SkillContainer, SkillList, ToolList, DivisionLine } from '../styles/component/Skills';
import ScrollFadeIn from './hooks/ScrollFadeIn';

const Skills = () => {
   const animatedItem = {
      0: ScrollFadeIn('up', 1, 0),
   };

   return (
      <BoxWrap {...animatedItem[0]}>
         <SkillMain>
            <Title>Skills</Title>
            <SkillContainer>
               <SkillList>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Styled-components</li>
                  <li>Firebase</li>
               </SkillList>
               <DivisionLine></DivisionLine>
               <ToolList>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Figma</li>
                  <li>Notion</li>
                  <li>Visual StudioCode</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe InDesign</li>
               </ToolList>
            </SkillContainer>
         </SkillMain>
      </BoxWrap>
   );
};

export default Skills;
