import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-top: 20px;
  padding-right: 20px;

  margin-left: 230px;
`;

export const Header = styled.div`
  color: var(--color-text);

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

export const ContentContainer = styled.div`
  &:not(:first-child) {
    margin-top: 48px;
  }
`;

export const ContentContainerHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  & > div:nth-of-type(1) {
    margin-right: 12px;
    font-size: 20px;
  }

  & > div:nth-of-type(2) {
    font-size: 16px;
    color: #35477d;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  width: 206px;
  height: 270px;

  &:not(:last-child) {
    margin-right: auto;
  }

  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  border: 2px solid #35477d;
  border-radius: 10px;

  overflow: hidden;

  & > div:nth-of-type(1) {
    width: 100%;
    height: 170px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > div:nth-of-type(2) {
    width: 68px;
    height: 68px;
    background: #ffffff;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%);

    border: 4px solid #6c5b7b;
    border-radius: 120px;

    position: absolute;
    left: 67px;
    top: 125px;

    & > img {
      border-radius: 120px;
    }
  }

  & > div:nth-of-type(3) {
    height: calc(100% - 170px);

    padding: 30px 15px 0;
    background-color: #c06c844f;

    display: flex;
    flex-direction: column;
    color: #35477d;

    & > div:nth-of-type(1) {
      font-size: 16px;
      font-weight: 700;

      display: inline-block;

      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    & > div:nth-of-type(2) {
      font-size: 14px;
    }
  }
`;

export const More = styled.div`
  display: flex;
  align-items: center;

  margin-top: 12px;

  cursor: pointer;

  & > div:nth-of-type(1) {
    margin-right: 8px;
  }
`;
