import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  padding-top: 28px;
`;

export const LeftContainer = styled.div`
  margin-right: 30px;

  width: 840px;
`;

export const Summary = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: 100%;
  height: 380px;

  margin-bottom: 16px;

  & > div:nth-of-type(1) {
    margin-top: 24px;
    margin-left: 24px;

    font-size: 24px;
    font-weight: 600;
  }
`;

export const ThreeContainer = styled.div`
  width: 100%;
  height: 180px;

  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;
`;

export const MiniContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: calc(100% / 3 - 16px);
  height: 100%;

  & > div {
    margin-top: 24px;
    margin-left: 24px;

    font-size: 16px;
    font-weight: 400;
  }
`;

export const Activity = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: 100%;
  height: 252px;

  & > div:nth-of-type(1) {
    margin-top: 24px;
    margin-left: 24px;

    font-size: 24px;
    font-weight: 600;
  }
`;

export const RightContainer = styled.div`
  width: calc(100% - 840px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BarGraphContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: 100%;
  height: calc(100% / 3 - 16px);

  & > div:nth-of-type(1) {
    width: 100%;
    height: 48px;

    margin-top: 8px;
    margin-left: 24px;

    font-size: 26px;
    font-weight: 600;

    display: flex;
    align-items: center;

    & > div:nth-of-type(1) {
      margin-right: 16px;
    }

    & > div:nth-of-type(2) {
      font-size: 32px;
      font-weight: 600;

      color: #00dea3;

      margin-right: 4px;
    }

    & > div:nth-of-type(3) {
      font-size: 18px;
      font-weight: 400;

      padding-top: 8px;

      color: #535353;
    }
  }

  & > div:nth-of-type(2) {
    width: 480px;
    height: 188px;

    & > canvas {
      height: 188px !important;
    }

    margin: 8px 24px;
  }
`;
