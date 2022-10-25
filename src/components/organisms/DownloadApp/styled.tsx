import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 422px;
  padding: 40px 96px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.div`
  & > div:nth-of-type(1) {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    display: flex;
    align-items: center;
    color: var(--color-palette3);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
    padding-left: 8px;
  }

  & > div:nth-of-type(2) {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: var(--color-palette3);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
    padding-left: 8px;
  }

  & > img {
    cursor: pointer;
    width: 216px;
  }
`;

export const Img = styled.div`
  display: flex;

  & > img:not(:last-of-type) {
    margin-right: 16px;
  }

  & > img {
    width: 344px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;
