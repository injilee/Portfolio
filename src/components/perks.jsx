import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const P = {
   Wrapper: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
   `,
   PerksText: styled.p`
      font-size: 20px;
      font-weight: 500;
      color: var(--theme-font-color);

      @media screen and (max-width: 768px) {
         font-size: 17px;
      }
   `,
};
const Perks = () => {
   const text = useRef();
   const perks = ['꾸준히 성장해나가는', '커뮤니케이션을 즐기는', '아이디어가 많은', '사용자 경험을 중요시하는'];
   const [count, setCount] = useState(0);

   const callback = () => {
      let n = count === perks.length - 1 ? 0 : count + 1;
      setCount(n);
   };

   useEffect(() => {
      text.current = callback;
   });

   useEffect(() => {
      function tick() {
         text.current();
      }

      let id = setInterval(tick, 3000);
      return () => clearInterval(id);
   }, [count]);

   return (
      <P.Wrapper>
         <P.PerksText ref={text}>
            {perks[count]}
            <span> 개발자</span>
         </P.PerksText>
      </P.Wrapper>
   );
};

export default Perks;
