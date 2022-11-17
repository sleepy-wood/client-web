import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 32px 240px 0;
`;

export const Header = styled.div`
  color: var(--color-text);
  margin-bottom: 16px;

  & > h1 {
    margin-bottom: 15px;
    font-size: 36px;
    font-weight: 600;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  height: 120px;

  padding-top: 24px;

  display: flex;
  align-items: center;
`;

export const ItemImg = styled.div`
  width: 96px;
  height: 96px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 24px;

  border-radius: 10px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemInfoContainer = styled.div`
  width: 100%;
`;

export const ItemTitle = styled.div`
  max-width: 100%;
  overflow: hidden;

  cursor: pointer;

  color: #000;
  font-size: 18px;
  font-weight: 600;

  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--color-text);

  & > div:nth-of-type(1) {
    & > div:nth-of-type(1) {
      display: flex;

      margin-top: 4px;

      & > div:nth-of-type(1) {
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        line-height: 18px;
      }

      & > div:nth-of-type(2) {
        position: relative;

        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        line-height: 18px;

        opacity: 0.7;

        margin: 0 0 0 8px;
        padding-left: 11px;

        &::before {
          content: '';

          position: absolute;
          left: 0;
          top: 50%;

          width: 1px;
          height: 17px;
          margin-top: -9px;
          background-color: var(--color-text);
          opacity: 0.7;
        }
      }
    }

    & > div:nth-of-type(2) {
      margin-top: 4px;

      font-size: 14px;
      opacity: 0.7;
    }
  }
`;

export const ItemSeller = styled.div`
  margin-right: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div:nth-of-type(1) {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div:nth-of-type(2) {
    font-size: 12px;
  }
`;

export const PaymentContainer = styled.div`
  margin: 40px 0;
  margin-right: 16px;
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
