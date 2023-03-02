import styled from 'styled-components';

export const ProjectContent = styled.li`
   background-color: rgba(255, 255, 255, 0.1);
   padding: 20px;
   border: 1px solid var(--gray-color);
   border-radius: 5px;

   &:hover {
      transition: all 0.3s ease-out;
      box-shadow: 5px 7px 20px 2px rgb(0 0 0 / 18%);
   }
   @media screen and (max-width: 768px) {
      &:hover {
         box-shadow: 2px 3px 10px 2px rgb(0 0 0 / 18%);
      }
   }

   img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      margin-bottom: 20px;
   }

   h3 {
      font-size: 23px;
   }
`;

export const ProjectSkills = styled.div`
   color: ${props => props.theme.color.color};
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 60px;

   ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;

      li {
         color: var(--black-color);
         background-color: var(--orange-color);
         border-radius: 20px;
         padding: 7px 13px;
         font-size: 13px;
         line-height: 1.23;
         font-weight: 600;
         margin-right: 3px;
         margin-bottom: 5px;
      }
   }
`;

export const Description = styled.p.attrs({
   'aria-label': '프로젝트 설명',
})`
   font-size: 16px;
   margin-top: 15px;
`;

export const LinkBtn = styled.div`
   position: absolute;
   right: 20px;
   bottom: 20px;
   display: flex;
   justify-content: flex-end;
   margin-top: 30px;

   .btn {
      font-size: 30px;
      color: var(--gray-color);
      margin: 0 8px;
      transition: all 0.2s ease-out;

      &:hover {
         color: gray;
      }
   }
`;
