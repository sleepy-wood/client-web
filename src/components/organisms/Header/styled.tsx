import styled from 'styled-components';

import { SIZES } from '../../../constants';

export const Container = styled.div`
  width: 100%;
  height: 72px;

  z-index: 100;
  position: sticky;
  top: 0;

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  text-shadow: -1px 0 #f5f5f5, 0 1px #f5f5f5, 1px 0 #f5f5f5, 0 -1px #f5f5f5;

  & > div {
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
  }
`;

export const AppName = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-right: 48px;
  white-space: nowrap;
  cursor: pointer;

  width: 160px;

  position: relative;

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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  margin-right: 32px;

  & > div {
    cursor: pointer;

    font-size: 18px;
    font-weight: bold;

    color: #313860;
  }

  & > div:not(:last-child) {
    margin-right: 32px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    position: relative;
    & > svg {
      cursor: pointer;
    }

    & > img {
      cursor: pointer;
      width: 28px;
      height: 28px;

      border-radius: 50%;
    }
  }

  & > div:nth-of-type(3),
  div:nth-of-type(4) {
    & > div:last-of-type {
      position: absolute;
      top: 0px;
      right: -2px;

      width: 9px;
      height: 9px;

      background-color: crimson;
      border-radius: 50%;
    }
  }

  & > div:not(:last-child) {
    margin-right: 32px;
  }
`;

export const InfoContainer = styled.div`
  width: 160px;

  position: absolute;
  top: 52px;
  left: 0;
  z-index: 1;

  background-color: white;

  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  & > div {
    display: flex;
    align-items: center;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    font-weight: 600;
    font-size: 15px;
    color: rgb(4, 17, 29);
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid rgb(229, 232, 235);
  }

  & > div:nth-of-type(1) {
    padding: 12px;
  }

  & > div:nth-of-type(2) {
    padding: 12px;
    cursor: pointer;
  }

  & > div:nth-of-type(3) {
    padding: 12px;
    cursor: pointer;
  }
`;

export const InfoIconContainer = styled.div`
  width: fit-content;
  padding: 2px;
  background-color: #f0f0f0;
  border: 2px solid rgb(229, 232, 235);
  border-radius: 50%;
  margin-right: 8px;
`;

export const InfoWallet = styled.div`
  width: fit-content;
  padding: 2px;
  margin-right: 8px;
`;

export const CartTitle = styled.div`
  font-size: 24px;
  font-weight: 600;

  margin-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;

    & > div:nth-of-type(1) {
      margin-right: 12px;
    }

    & > div:nth-of-type(2) {
      font-size: 16px;
      opacity: 0.7;
    }
  }

  & > div:nth-of-type(2) {
    cursor: pointer;
  }
`;

export const Tooltip = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 12px;

  & > * {
    margin-right: 16px;

    cursor: pointer;
  }
`;

export const ItemList = styled.div`
  margin-bottom: 24px;
`;

export const ItemCheckbox = styled.input`
  display: none;

  & + label {
    position: relative;

    cursor: pointer;

    width: 16px;
    height: 16px;

    border: 2px solid #707070;
    border-radius: 4px;
  }

  &:checked + label::after {
    position: absolute;
    left: -2px;
    top: -3px;

    content: '???';
    font-size: 12px;

    width: 16px;
    height: 16px;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;

  font-size: 14px;

  & > div:not(:nth-of-type(1)) {
    text-align: center;

    & > div:nth-of-type(1) {
      font-size: 12px;
      color: var(--color-text);
      opacity: 0.7;

      margin-bottom: 12px;
    }

    & > div:nth-of-type(2) {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  & > div:nth-of-type(1) {
    width: 80px;
    height: 80px;

    border-radius: 10px;
    overflow: hidden;

    margin-right: 8px;
  }

  & > div:nth-of-type(2) {
    width: 120px;

    margin-right: 8px;
  }

  & > div:nth-of-type(3) {
    width: 120px;

    margin-right: 8px;
  }
`;

export const PaymentContainer = styled.div`
  margin-bottom: 24px;
`;

export const PaymentTitle = styled.div`
  font-size: 18px;
  font-weight: 600;

  margin-bottom: 12px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  & > div:nth-of-type(2) {
    font-weight: 600;
  }
`;

export const TotalPrice = styled.div`
  color: var(--color-palette4);

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  & > div:nth-of-type(2) {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const CartButton = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 600;

  color: var(--color-text);

  cursor: pointer;

  background-color: var(--color-palette9);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
`;
