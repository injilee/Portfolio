import styled from 'styled-components';
import '../../fonts/font.css';

export const Container = styled.header`
   position: relative;
   height: 100px;
`;

export const Nav = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   height: 110px;
   padding: 20px 35px;
   background-color: ${props => props.theme.color.backgroundColor};
   color: ${props => props.theme.color.color};
   z-index: 10;
   border-bottom: 1px solid var(--gray-color);
`;

export const Logo = styled.h1.attrs({
   'aria-label': '이인지 포트폴리오 로고',
})`
   color: ${props => props.theme.color.color};
   font-size: 35px;
   font-family: 'SDSamliphopangche_Outline';
`;

export const Header = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const MenuBtn = styled.button`
   display: flex;
   font-size: 25px;
   color: ${props => props.theme.color.color};
`;

export const MenuList = styled.ul`
   position:fixed;
   top:0;
   right:0;
   display:block;
   width:10rem;
   height:100%;
   padding:80px 30px;
   background-color:var(--nav-slide-color);
   z-index:11;
   overflow:auto;
   transition: transform 0.3s ease-in-out;
   transform:${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
   scroll-behavior:smooth;

   li{
      color: ${props => props.theme.color.color};
      font-size: 18px;
      font-weight: 600;
      margin-top: 8px;
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
   font-size: 30px;
   margin: 15px;
   z-index: 1;

   &:hover {
      color: #e4402f;
   }
`;
