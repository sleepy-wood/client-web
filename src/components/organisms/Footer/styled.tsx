import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 40px;

  font-weight: 400;
  font-size: 16px;

  & > div {
    width: 33%;
    padding-top: 32px;

    & > div:nth-of-type(1) {
      position: relative;
      padding-bottom: 40px;

      & > div:nth-of-type(1) {
        width: 72px;
        position: absolute;
        top: -40px;
        left: 56px;
      }

      & > div:nth-of-type(2) {
        width: 180px;
        position: absolute;
        top: -2px;
        left: 0;
      }
    }

    & > div:nth-of-type(2) {
      font-weight: 700;
      font-size: 16px;
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
