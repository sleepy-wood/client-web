import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px 16px 0;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 48px;
  padding-bottom: 16px;

  display: flex;
  align-items: center;

  & > div:first-child {
    margin-right: 40px;
  }
`;

export const Title = styled.div<{ active?: boolean }>`
  font-weight: 700;
  font-size: 32px;

  color: #353840;
`;

export const CategoryContainer = styled.div`
  width: 100%;

  margin-top: 16px;
  display: flex;
`;

export const Category = styled.div``;
