import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px 16px 0;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 48px;
  padding-bottom: 16px;

  display: flex;
  align-items: center;

  & > div:first-child {
    margin-right: 40px;
  }
`;

export const Title = styled.div<{ active?: boolean }>`
  font-weight: 700;
  font-size: 32px;

  color: #353840;
`;

export const CategoryContainer = styled.div`
  width: 100%;

  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.div`
  cursor: pointer;

  & > div:nth-of-type(1) {
    width: 440px;
    height: 224px;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0 0;
    }
  }

  & > div:nth-of-type(2) {
    width: 440px;
    height: 68px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    border-radius: 0 0 10px 10px;

    font-weight: bold;
    font-size: 32px;

    color: #04111d;
  }
`;
