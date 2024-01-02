import styled from 'styled-components';

export const SkillMain = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  padding: 4.0625rem 1.875rem 3.75rem;
  background-color: var(--opacity-background-color);
  border-radius: 14px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 3.125rem;
    padding-bottom: 3.4375rem;
    box-shadow: 2px 5px 12px 3px rgb(0 0 0 / 9%);
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

export const SkillListItem = styled.li`
  color: var(--theme-font-color);
  border: 2px solid var(--orange-color);
  border-radius: 0.3rem;
  padding: 1.3rem 1.5rem;
  line-height: 1.23;
  margin-bottom: 0.9rem;

  span {
    font-size: 1.06rem;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    margin-top: 1rem;

    a {
      color: var(--blue-color);
      text-decoration: underline;
    }
  }
`;

export const DivisionLine = styled.div`
  position: relative;
  top: -0.625rem;
  width: 85%;
  height: 0.0625rem;
  background-color: var(--gray-color);
`;

export const ToolList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const ToolListItem = styled.li`
  color: var(--theme-font-color);
  border: 2px solid var(--gray-color);
  border-radius: 0.3rem;
  padding: 1.3rem 1.5rem;
  line-height: 1.23;
  margin-bottom: 0.9rem;

  span {
    font-size: 1.06rem;
    font-weight: 600;

    a {
      color: var(--blue-color);
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.95rem;
    margin-top: 1rem;

    a {
      color: var(--blue-color);
      text-decoration: underline;
    }
  }
`;
