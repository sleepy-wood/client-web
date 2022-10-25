import styled from 'styled-components';

import { SIZES } from '../../../constants';

export const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
`;

export const AppName = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-right: 48px;
  white-space: nowrap;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  width: 50%;
  height: 45px;
  padding: 8px 16px;

  margin-right: ${SIZES.gutterDesktop};

  position: relative;
  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 2px 20px var(--color-palette1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;

  & > div {
    margin-right: 8px;
  }

  & > input {
    width: 100%;
    background-color: transparent;
    outline: none;
    font-size: 18px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const MenuContainer = styled.div`
  margin-right: 24px;

  & > div {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  }

  & > div:not(:last-child) {
    margin-right: 24px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    cursor: pointer;
  }

  & > div:not(:last-child) {
    margin-right: 24px;
  }
`;
