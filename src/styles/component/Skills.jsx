import styled from 'styled-components';

export const SkillMain = styled.article`
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

export const SkillContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 1.875rem;
`;

export const SkillList = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   margin-bottom: 1.25rem;

   li {
      color: var(--black-color);
      background-color: var(--orange-color);
      border-radius: 1.25rem;
      padding: 0.5625rem 1.0667rem;
      font-size: 0.8125rem;
      line-height: 1.23;
      font-weight: 600;
      margin-right: 0.1875rem;
      margin-bottom: 0.3125rem;
   }
`;

export const DivisionLine = styled.div`
   position: relative;
   top: -0.625rem;
   width: 85%;
   height: 0.0625rem;
   background-color: var(--gray-color);
`;

export const ToolList = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   margin-bottom: 1.25rem;

   li {
      color: var(--black-color);
      background-color: var(--skill-gray-color);
      border-radius: 1.25rem;
      padding: 0.5625rem 0.9375rem;
      font-size: 0.8125rem;
      line-height: 1.23;
      font-weight: 600;
      margin-right: 0.1875rem;
      margin-bottom: 0.3125rem;
   }
`;
