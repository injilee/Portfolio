import styled from 'styled-components';

export const SkillMain = styled.article`
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

export const SkillContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 30px;
`;

export const SkillList = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   margin-bottom: 20px;

   li {
      color: var(--black-color);
      background-color: var(--orange-color);
      border-radius: 20px;
      padding: 9px 15px;
      font-size: 13px;
      line-height: 1.23;
      font-weight: 600;
      margin-right: 3px;
      margin-bottom: 5px;
   }
`;

export const DivisionLine = styled.div`
   position: relative;
   top: -10px;
   width: 85%;
   height: 1px;
   background-color: var(--gray-color);
`;

export const ToolList = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   margin-bottom: 20px;

   li {
      color: var(--black-color);
      background-color: var(--skill-gray-color);
      border-radius: 20px;
      padding: 9px 15px;
      font-size: 13px;
      line-height: 1.23;
      font-weight: 600;
      margin-right: 3px;
      margin-bottom: 5px;
   }
`;
