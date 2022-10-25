import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 380px;
  padding: 40px 16px 0;
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
  height: 276px;

  margin-top: 16px;
  display: flex;
`;

export const FiveContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
