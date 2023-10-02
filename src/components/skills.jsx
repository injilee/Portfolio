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
                  <S.SkillListItem>
                     <span>HTML5 / CSS3</span>
                     <p>
                        SEO 방법을 숙지하여 프로젝트(<a href="http://chaunglimkim.shop/">natural-archive</a>) 배포 했을
                        때 검색 시 도메인이 상위에 노출된 경험 있음. 시멘틱 태그를 사용한 마크업으로 필요한 태그들만
                        사용 가능. 웹 접근성과 웹 표준성에 맞춰 코드 작성 가능. 디자인 시안을 화면에 그대로 반응형웹
                        구현 가능.
                     </p>
                  </S.SkillListItem>
                  <S.SkillListItem>
                     <span>Javascript</span>
                     <p>
                        async/await로 비동기처리 가능. class를 이용해 객체 생성 및 활용 가능. fetch, axios로 HTTP 통신
                        가능하며 실무에서 배포한 경험 함께 있음(<a href="https://github.com/injilee/kcc2023">kcc2023</a>
                        ). DOM 조작 가능. 자바스크립트 라이브러리 활용 가능
                     </p>
                  </S.SkillListItem>
                  <S.SkillListItem>
                     <span>React</span>
                     <p>
                        클래스, 함수형 컴포넌트, React Hooks로 프로젝트를 구현 경험. useState 관련 훅 사용 가능.
                        React-router를 사용해 SPA로 구현 가능. Redux를 사용해 공통 데이터 관리 경험 있음.
                        Redux-persist로 state 초기화가 되지 않도록 한 경험 있음.
                     </p>
                  </S.SkillListItem>
                  <S.SkillListItem>
                     <span>Rest API</span>
                     <p>
                        REST API 를 활용해 Youtube API, Cloudinary API, Firebase Authentication&Database API 로 웹
                        어플리케이션 구현 경험.
                     </p>
                  </S.SkillListItem>
                  <S.SkillListItem>
                     <span>CSS Pre-processor</span>
                     <p>postCSS, Styled-components를 활용하여 스타일링 가능.</p>
                  </S.SkillListItem>
               </S.SkillList>
               <S.DivisionLine></S.DivisionLine>
               <S.ToolList>
                  <S.ToolListItem>
                     <span>Github / Git</span>
                     <p>Git을 이용한 기본적인 형상관리 가능. Github readme 문서화를 깔끔하고 가독성 좋게 작성 가능.</p>
                  </S.ToolListItem>
                  <S.ToolListItem>
                     <span>Notion</span>
                  </S.ToolListItem>
                  <S.ToolListItem>
                     <span>Figma</span>
                  </S.ToolListItem>
               </S.ToolList>
            </S.SkillContainer>
         </S.SkillMain>
      </BoxWrap>
   );
};

export default Skills;
