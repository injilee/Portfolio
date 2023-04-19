import styled from 'styled-components';

export const ProjectContent = styled.section`
   color: var(--theme-font-color);
   padding: 1.875rem 3.125rem 6.25rem;

   article {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 80%;
      padding: 3.125rem 1.875rem 2.5rem;
      background-color: var(--opacity-background-color);
      border-radius: 14px;
      box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
      margin: 5rem auto 0;
   }

   h2 {
      font-size: 1.5rem;
      color: var(--theme-font-color);
      margin-bottom: 2.1875rem;
   }

   @media screen and (max-width: 768px) {
      padding: 1.875rem 1.2rem 3.125rem;

      article {
         width: 100%;
         padding: 3.125rem 1.25rem 2.5rem;
         box-shadow: 2px 5px 12px 3px rgb(0 0 0 / 9%);
      }
   }
`;

export const CardContainer = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
   grid-template-rows: minmax(500px, auto);
   grid-gap: 1.25rem;

   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 1.875rem;
   }

   li {
      position: relative;
   }
`;
