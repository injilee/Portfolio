import styled from 'styled-components';

export const ProjectList = styled.li`
   background-color: rgba(255, 255, 255, 0.1);
   padding: 1.25rem;
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
      height: 18.75rem;
      object-fit: cover;
      margin-bottom: 1.25rem;
   }

   h3 {
      font-size: 1.4375rem;
   }
`;

export const ProjectSkills = styled.div`
   color: ${props => props.theme.color.color};
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 3.75rem;

   ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 1.25rem;

      li {
         color: var(--black-color);
         background-color: var(--orange-color);
         border-radius: 1.25rem;
         padding: 0.4375rem 0.8125rem;
         font-size: 0.8125rem;
         line-height: 1.23;
         font-weight: 600;
         margin-right: 0.1875rem;
         margin-bottom: 0.3125rem;
      }
   }
`;

export const Description = styled.p.attrs({
   'aria-label': '프로젝트 설명',
})`
   font-size: 1rem;
   margin-top: 0.9375rem;
`;

export const LinkBtn = styled.div`
   position: absolute;
   right: 1.25rem;
   bottom: 1.25rem;
   display: flex;
   justify-content: flex-end;
   margin-top: 1.875rem;

   .btn {
      font-size: 1.875rem;
      color: var(--gray-color);
      margin: 0 0.5rem;
      transition: all 0.2s ease-out;

      &:hover {
         color: gray;
      }
   }
`;
