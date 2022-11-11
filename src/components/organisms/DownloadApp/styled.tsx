import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 422px;
  padding: 40px 34px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.div`
  color: #5f6da1;

  & > div:nth-of-type(1) {
    font-weight: 700;
    font-size: 40px;
    display: flex;
    align-items: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
    padding-left: 8px;
  }

  & > div:nth-of-type(2) {
    font-weight: 400;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
    padding-left: 8px;
  }

  & > img {
    cursor: pointer;
    width: 216px;
  }
`;

export const Video = styled.div`
  width: 740px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;

  & > video {
    object-fit: cover;
  }
`;
