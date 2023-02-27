import styled from 'styled-components';

export const AboutMain = styled.article`
   display: flex;
   flex-direction: column;
   text-align: center;
   width: 70%;
   padding: 65px 30px 60px;
   background-color: var(--opacity-background-color);
   border-radius: 14px;
   box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
   margin: 0 auto;

   @media screen and (max-width: 768px) {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 55px;
      box-shadow: 2px 5px 12px 3px rgb(0 0 0 / 9%);
   }
`;

export const Produce = styled.p`
   font-size: 17px;
   color: var(--theme-font-color);
   margin-top: 5px;
`;

export const Description = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding-top: 40px;
   color: var(--theme-font-color);

   img {
      width: 230px;
      height: auto;
      margin-right: 65px;
   }

   @media screen and (max-width: 768px) {
      flex-direction: column;

      img {
         margin-right: 0;
      }
   }
`;

export const Contact = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   strong {
      color: dodgerblue;
      font-size: 23px;
   }

   h3 {
      font-size: 26px;
      margin-top: 6px;
   }

   @media screen and (max-width: 768px) {
      strong {
         margin-top: 30px;
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
      font-size: 18px;
      margin-top: 40px;
      margin-bottom: 5px;
   }

   span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
`;

export const ContactChannel = styled.div`
   display: flex;
   font-size: 24px;
   line-height: 1;
   margin-top: 40px;

   a {
      display: flex;
      color: var(--theme-font-color);
      &:hover {
         color: var(--gray-color);
      }
   }

   span {
      margin: 0 3px;
   }
`;
