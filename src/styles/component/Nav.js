import styled from 'styled-components';

export const NavBar = styled.nav`
   position: fixed;
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 130px;
   padding: 20px 35px;
   background-color: ${props => props.theme.color.backgroundColor};
   color: ${props => props.theme.color.color};
   z-index: 10;
   border-bottom: 1px solid var(--gray-color);
`;
export const Header = styled.header`
   display: flex;
   justify-content: space-between;
`;
export const Logo = styled.h1.attrs({
   'aria-label': '이인지 포트폴리오 로고',
})`
   color: ${props => props.theme.color.color};
   font-size: 35px;
   font-family: 'SDSamliphopangche_Outline';
   cursor: pointer;
`;

export const MenuList = styled.ul`
   margin-top: 5px;

   li{
      color: ${props => props.theme.color.color};
      font-size: 18px;
      font-weight: 600;
      margin-top: 4px;
   }

   span {
      cursor: pointer;
      &:hover {
         color: var(--hover-purple-color);
      }
`;
