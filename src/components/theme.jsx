import { FaMoon } from 'react-icons/fa';
import { CgSun } from 'react-icons/cg';
import { ThemeContainer, ThemeIcon } from '../styles/component/Theme';

const Theme = ({ darkModeHandler, darkMode }) => {
   return (
      <ThemeContainer>
         <ThemeIcon onClick={darkModeHandler}>
            <span>{darkMode === false ? '다크모드로 변경하기' : '라이트모드로 변경하기'}</span>
            {darkMode === false ? <FaMoon /> : <CgSun />}
         </ThemeIcon>
      </ThemeContainer>
   );
};

export default Theme;
