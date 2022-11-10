import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 532px;
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
    width: 320px;
    height: 400px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    object-fit: cover;
  }
`;
