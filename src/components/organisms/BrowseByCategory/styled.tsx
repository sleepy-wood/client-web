import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px 16px 0;

  overflow: hidden;
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

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  & > div {
    width: 440px;
  }

  & > div:nth-of-type(1) {
    height: 224px;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0 0;
      object-fit: cover;
    }
  }

  & > div:nth-of-type(2) {
    height: 68px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    border-radius: 0 0 10px 10px;

    font-weight: bold;
    font-size: 32px;

    color: #04111d;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
