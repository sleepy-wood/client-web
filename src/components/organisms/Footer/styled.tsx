import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 40px;

  display: flex;
  justify-content: space-between;

  font-weight: 400;
  font-size: 16px;

  & > div:nth-of-type(1) {
    & > div {
      display: flex;
      & > div:not(last-of-type) {
        width: 120px;
      }
    }

    & > div:not(last-of-type) {
      margin-top: 16px;
    }
  }

  & > div:nth-of-type(2) {
    & > div:not(last-of-type) {
      margin-top: 4px;
    }
  }
`;

export const Bottom = styled.div`
  color: #ffffff;

  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;

  & > div {
    padding: 12px 0;

    border-top: 1px solid white;

    display: flex;
    justify-content: space-between;

    font-weight: 700;
    font-size: 12px;

    display: flex;
    align-items: center;
    text-align: center;

    & > div > div:nth-of-type(2) {
      margin-left: 16px;
    }
  }
`;
