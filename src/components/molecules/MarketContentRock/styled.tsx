import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  color: var(--color-text);
  margin-bottom: 36px;

  & > h1 {
    margin-bottom: 15px;
    font-size: 36px;
    font-weight: 600;
  }

  & > p {
    font-size: 16px;
    font-weight: 500;
  }
`;
