import React from 'react';
import { BoxWrap, Title } from '../styles/BoxWrap';
import * as S from '../styles/component/Skills';
import ScrollFadeIn from './hooks/ScrollFadeIn';

const Skills = () => {
   const animatedItem = {
      0: ScrollFadeIn('up', 1, 0),
   };

   return (
      <BoxWrap {...animatedItem[0]}>
         <S.SkillMain>
            <Title>Skills</Title>
            <S.SkillContainer>
               <S.SkillList>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Rest API</li>
                  <li>Styled-components</li>
               </S.SkillList>
               <S.DivisionLine></S.DivisionLine>
               <S.ToolList>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Notion</li>
                  <li>Visual StudioCode</li>
               </S.ToolList>
            </S.SkillContainer>
         </S.SkillMain>
      </BoxWrap>
   );
};

export default Skills;
