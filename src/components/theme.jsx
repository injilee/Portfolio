import { FaMoon } from 'react-icons/fa';
import { CgSun } from 'react-icons/cg';
import { ThemeContainer, ThemeIcon } from '../styles/component/Theme';

const Theme = () => {
   return (
      <ThemeContainer>
         <ThemeIcon>
            <span>다크모드로 변경하기</span>
            <FaMoon />
         </ThemeIcon>
         <ThemeIcon>
            <span>라이트모드로 변경하기</span>
            <CgSun />
         </ThemeIcon>
      </ThemeContainer>
   );
};

export default Theme;
