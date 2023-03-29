import React from 'react';
import { BoxWrap, Title } from '../styles/BoxWrap';
import { AboutMain, Produce, Description, Contact, ContactAddress, ContactChannel } from '../styles/component/About';
import { FaGithub } from 'react-icons/fa';
import ScrollFadeIn from './hooks/ScrollFadeIn';

const About = () => {
   const animatedItem = {
      0: ScrollFadeIn('up', 1, 0),
   };

   return (
      <BoxWrap {...animatedItem[0]}>
         <AboutMain>
            <Title>About</Title>
            <Produce>꾸준히 성장해나가는 프론트엔드 개발자 </Produce>
            <Description>
               <img src="./image/inji_profile.jpg" alt="inji lee profile" />
               <Contact>
                  <strong aria-label="직업">#FE</strong>
                  <h3 aria-label="이름">이인지</h3>
                  <ContactAddress>
                     <h4>Contact</h4>
                     <span aria-label="전화번호">📞 010-2610-1667</span>
                     <span aria-label="이메일 주소">📧 lij8016@gmail.com</span>
                  </ContactAddress>
                  <ContactChannel>
                     <a href="https://github.com/injilee/Portfolio" aria-label="깃허브 링크">
                        <FaGithub />
                     </a>
                     <span> | </span>
                     <a href="https://blog.naver.com/lij8016" aria-label="블로그 링크">
                        Blog
                     </a>
                  </ContactChannel>
               </Contact>
            </Description>
         </AboutMain>
      </BoxWrap>
   );
};

export default About;
