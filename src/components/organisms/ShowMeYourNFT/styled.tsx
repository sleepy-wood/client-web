import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 448px;
`;

export const Header = styled.div`
  width: 100%;
  height: 132px;
  font-weight: 700;
  font-size: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #04111d;
`;

export const Img = styled.div`
  & > img {
    cursor: pointer;
    width: 316px;
    height: 316px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;
