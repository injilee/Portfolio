import styled from 'styled-components';

export const DarkTheme = {
   color: {
      backgroundColor: 'white',
      color: 'black',
   },
};

export const LightTheme = {
   color: {
      backgroundColor: 'black',
      color: 'white',
   },
};

export const ThemeContainer = styled.div`
   display: flex;
   flex-direction: row;
`;

export const ThemeIcon = styled.button`
   width: 36px;
   height: 36px;
   font-size: 20px;
   color: ${props => props.theme.color.color};
   &:hover {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      background-color: var(--gray-color);
   }

   span {
      position: absolute;
      width: 0;
      height: 0;
      overflow: hidden;
      line-height: 0;
      text-indent: -9999px;
   }
`;
