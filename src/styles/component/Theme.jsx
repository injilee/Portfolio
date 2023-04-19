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
   width: 2.25rem;
   height: 2.25rem;
   font-size: 1.25rem;
   color: ${props => props.theme.color.color};
   &:hover {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 18px;
      background-color: var(--hover-gray-color);
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
