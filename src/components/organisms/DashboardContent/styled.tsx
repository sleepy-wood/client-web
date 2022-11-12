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
`;
