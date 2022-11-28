import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 140px 16px 0;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 48px;
  padding-bottom: 16px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(108, 91, 123, 0.3);

  & > div:first-child {
    margin-right: 40px;
  }
`;

export const Title = styled.div<{ active?: boolean }>`
  font-weight: 700;
  font-size: 32px;

  color: ${props => (props.active ? '#353840' : '#707A83')};

  cursor: pointer;

  position: relative;

  ${props =>
    props.active &&
    `
    &::after {
      content: '';
      display: block;
      position: absolute;
      margin-top: 6px;
      width: 100%;
      height: 2px;
      background: black;
    }
  `}
`;

export const TopTenContainer = styled.div`
  width: 100%;

  margin-top: 16px;
  display: flex;
`;

export const FiveContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > div:nth-of-type(1) {
    width: 70%;
  }

  & > div:nth-of-type(2) {
    width: 15%;
    text-align: center;
  }

  & > div:nth-of-type(3) {
    width: 15%;
    text-align: center;
  }
`;

export const SubTitle = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: #707a83;
`;

export const ProfileContainer = styled.div`
  width: 100%;
`;

export const Profile = styled.div`
  width: 100%;
  height: 92px;
  padding: 12px 8px;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: rgba(108, 91, 123, 0.1);
    border-radius: 10px;
  }

  & > div {
    height: 100%;
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 16px;
    color: #04111d;
  }

  & > div:nth-of-type(1) {
    width: 70%;

    & > div:nth-of-type(1) {
      width: 24px;
      margin-right: 16px;
      font-weight: 700;
      font-size: 28px;
      color: #707a83;
    }

    & > div:nth-of-type(2) {
      margin-right: 24px;

      & > img {
        width: 68px;
        height: 68px;
        border: 1px solid transparent;
        border-radius: 10px;
      }
    }
  }

  & > div:nth-of-type(2) {
    width: 15%;
    text-align: center;
    & > p {
      width: 100%;
    }
  }

  & > div:nth-of-type(3) {
    width: 15%;
    text-align: center;
    & > p {
      width: 100%;
    }
  }
`;
