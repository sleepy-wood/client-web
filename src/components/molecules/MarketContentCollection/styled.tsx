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
      object-fit: contain;
    }
  }
`;

export const ItemContentContainer = styled.div`
  display: flex;

  height: calc(100% - 170px);

  padding: 30px 15px 0;
  background-color: var(--color-palette8);

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
`;

export const AssetButtonContainer = styled.div`
  width: 52px;
  height: 52px;

  margin-left: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text);

  cursor: pointer;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
