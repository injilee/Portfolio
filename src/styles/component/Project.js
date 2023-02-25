import styled from 'styled-components';

export const ProjectContent = styled.section`
   color: var(--theme-font-color);
   padding: 30px 3.125rem 100px;

   article {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 80%;
      padding: 50px 30px 40px;
      background-color: var(--opacity-background-color);
      border-radius: 14px;
      box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
      margin: 80px auto 0;
   }

   h2 {
      font-size: 24px;
      color: var(--theme-font-color);
      margin-bottom: 35px;
   }

   @media screen and (max-width: 768px) {
      padding: 30px 1.2rem 50px;

      article {
         width: 100%;
         padding: 50px 20px 40px;
         box-shadow: 2px 5px 12px 3px rgb(0 0 0 / 9%);
      }
   }
`;

export const CardContainer = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
   grid-template-rows: minmax(500px, auto);
   grid-gap: 20px;

   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 30px;
   }
`;
