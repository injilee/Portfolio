import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --white-color: #ffffff;
  --black-color: #000000;
  --gray-color: #dddddd;
  --orange-color: #fdcd77fc;
  --skill-gray-color: #f0f0f0;
  --nav-background-color: var(--white-color);
  --nav-font-color: var(--black-color);
  --hover-purple-color: #62259e;
  --opacity-background-color: rgba(255, 255, 255, 0.1);
}

@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'SDSamliphopangche_Outline';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff')
     format('woff');
  font-weight: normal;
  font-style: normal;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Pretendard-Regular', 'Noto Sans KR', sans-serif;
}

body {
  background-color: ${props => props.theme.color.backgroundColor};
  color: ${props => props.theme.color.color};
}

:is(ul, ol, li) {
  padding: 0;
  margin: 0;
  list-style: none;
}

button {
  border: 0;
  cursor: pointer;
  background-color: transparent;
  font-family: 'Noto Sans KR', sans-serif;
}

input {
  border: 0;
}

a {
  text-decoration: none;
}

a:visited,
a:active {
  text-decoration: none;
}
`;

export default GlobalStyles;
