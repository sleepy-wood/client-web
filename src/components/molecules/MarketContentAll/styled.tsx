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

export const ContentContainer = styled.div`
  margin-bottom: 36px;
`;

export const ContentContainerHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  & > div:nth-of-type(1) {
    margin-right: 12px;
    font-size: 20px;
    font-weight: 500;
  }

  & > div:nth-of-type(2) {
    font-size: 16px;
    color: #35477dc4;
  }
`;

export const CardContainer = styled.div`
  margin-top: 16px;

  padding-bottom: 16px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 8px 8px;
  justify-content: start;
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

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
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

    border: 3px solid var(--color-palette9);
    border-radius: 50%;

    position: absolute;
    left: 67px;
    top: 125px;

    overflow: hidden;

    & > img {
      border-radius: 120px;
    }
  }

  & > div:nth-of-type(3) {
    height: calc(100% - 170px);

    padding: 30px 15px 0;
    background-color: var(--color-palette8);

    display: flex;
    flex-direction: column;
    color: var(--color-text);

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
  display: inline-block;
  & > div {
    display: flex;
    align-items: center;

    margin-top: 12px;

    cursor: pointer;

    & > div:nth-of-type(1) {
      margin-right: 8px;
    }
  }
`;
