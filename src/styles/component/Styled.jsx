import styled from 'styled-components';
import '../../fonts/font.css';

export const Container = styled.header`
   position: relative;
   height: 6.25rem;
`;

export const Nav = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   height: 6.875rem;
   padding: 1.25rem 2.1875rem;
   background-color: ${props => props.theme.color.backgroundColor};
   color: ${props => props.theme.color.color};
   z-index: 10;
   border-bottom: 1px solid var(--gray-color);
`;

export const Logo = styled.h1.attrs({
   'aria-label': '이인지 포트폴리오 로고',
})`
   color: ${props => props.theme.color.color};
   font-size: 2.1875rem;
   font-family: 'SDSamliphopangche_Outline';
`;

export const Header = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const MenuBtn = styled.button`
   display: flex;
   font-size: 1.5625rem;
   color: ${props => props.theme.color.color};
`;

export const MenuList = styled.ul`
   position:fixed;
   top:0;
   right:0;
   display:block;
   width:10rem;
   height:100%;
   padding:5rem 1.875rem;
   background-color:var(--nav-slide-color);
   z-index:11;
   overflow:auto;
   transition: transform 0.3s;
   transition-timing-function:cubic-bezier(.38,.1,.44,.84);
   transform:${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
   scroll-behavior:smooth;

   li{
      color: var(--black-color);
      font-size: 1.125rem;
      font-weight: 500;
      margin-top: 0.5rem;
   }

   span {
      cursor: pointer;
      &:hover {
      color: var(--hover-purple-color);
   }
   
`;

export const CloseIo = styled.button`
   position: absolute;
   top: 0;
   right: 0;
   display: ${({ open }) => (open ? 'block' : 'none')};
   font-size: 1.875rem;
   margin: 0.9375rem;
   z-index: 1;

   &:hover {
      color: #e4402f;
   }
`;
