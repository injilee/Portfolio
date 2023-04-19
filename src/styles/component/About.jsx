import styled from 'styled-components';

export const AboutMain = styled.article`
   display: flex;
   flex-direction: column;
   text-align: center;
   width: 70%;
   padding: 4.0625rem 1.875rem 3.75rem;
   background-color: var(--opacity-background-color);
   border-radius: 14px;
   box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
   margin: 0 auto;

   @media screen and (max-width: 768px) {
      width: 100%;
      padding-top: 3.125rem;
      padding-bottom: 3.4375rem;
      box-shadow: 2px 5px 12px 3px rgb(0 0 0 / 9%);
   }
`;

export const Description = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding-top: 2.5rem;
   color: var(--theme-font-color);

   @media screen and (max-width: 768px) {
      flex-direction: column;
   }
`;

export const Contact = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   strong {
      color: dodgerblue;
      font-size: 1.4375rem;
   }

   h3 {
      font-size: 1.625rem;
      margin-top: 0.375rem;
   }

   @media screen and (max-width: 768px) {
      strong {
         margin-top: 1.875rem;
      }
   }
`;

export const ContactAddress = styled.div`
   display: flex;
   flex-direction: column;

   h4 {
      display: flex;
      justify-content: center;
      color: firebrick;
      font-size: 1.125rem;
      margin-top: 2.5rem;
      margin-bottom: 0.3125rem;
   }

   span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
`;

export const ContactChannel = styled.div`
   display: flex;
   font-size: 1.5rem;
   line-height: 1;
   margin-top: 2.5rem;

   a {
      display: flex;
      color: var(--theme-font-color);
      &:hover {
         color: var(--gray-color);
      }
   }

   span {
      margin: 0 0.1875rem;
   }
`;
