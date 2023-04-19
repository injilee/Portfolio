import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${props => props.theme.color.backgroundColor};
  color: ${props => props.theme.color.color};
}
`;

export default GlobalStyles;
