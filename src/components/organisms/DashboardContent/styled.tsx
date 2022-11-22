import styled from 'styled-components';

export const Banner = styled.div`
  position: absolute;
  top: 72px;
  left: 0;
  width: 100%;
  height: 172px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Profile = styled.div`
  margin-top: 116px;
  margin-bottom: 16px;

  padding: 12px;

  width: 100%;
  height: 112px;

  background: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
  border: 1px solid #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-of-type {
    display: flex;
    align-items: center;

    & > div:first-of-type {
      margin-right: 40px;

      width: 90px;
      height: 90px;

      border-radius: 20px;

      overflow: hidden;
    }

    & > div:last-of-type {
      & > div:first-of-type {
        font-weight: 700;
        font-size: 21px;
        color: #535353;

        margin-bottom: 10px;
      }

      & > div:last-of-type {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 15px;
        color: #373b3f;

        & > div:not(:last-of-type) {
          margin-right: 32px;
        }
      }
    }
  }

  & > div:last-of-type {
    margin-right: 52px;

    width: 248px;
    height: 48px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0px 8px;

    background: #ffffff;
    box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    font-weight: 700;
    font-size: 16px;
    color: #2d3748;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-bottom: 36px;

  display: flex;
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

  & > div:nth-of-type(1) {
    margin-top: 24px;
    margin-left: 24px;

    font-size: 16px;
    font-weight: 400;
  }

  & > div:nth-of-type(2) {
    width: 100%;
    height: calc(100% - 60px);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 68px;
    font-weight: 700;
  }

  &:nth-of-type(1) {
    & > div:nth-of-type(2) {
      color: #00dea3;
    }
  }

  &:nth-of-type(2) {
    & > div:nth-of-type(2) {
      color: #00bbde;
    }
  }

  &:nth-of-type(3) {
    & > div:nth-of-type(2) {
      color: #00de7c;
    }
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

  & > div:not(:nth-of-type(1)) {
    display: flex;
    align-items: center;

    height: 40px;

    margin: 16px 24px 0;

    & > div:nth-of-type(1) {
      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 12px;

      margin-right: 140px;
    }

    & > div:nth-of-type(2) {
      width: 100px;

      font-size: 16px;
      font-weight: 500;
      text-align: center;

      color: #707eae;

      margin-right: 140px;
    }

    & > div:nth-of-type(3) {
      width: 40px;

      font-size: 16px;
      font-weight: 700;
      text-align: center;

      color: #707eae;

      margin-right: 140px;
    }

    & > div:nth-of-type(4) {
      margin-right: auto;
    }

    & > div:nth-of-type(5) {
      cursor: pointer;
    }
  }

  & > div:nth-of-type(2) {
    & > div:nth-of-type(1) {
      background-color: #ffcc40;
    }

    & > div:nth-of-type(4) {
      font-size: 16px;
      font-weight: 500;

      color: #4318ff;
    }
  }

  & > div:nth-of-type(3) {
    & > div:nth-of-type(1) {
      background-color: #783efd;
    }

    & > div:nth-of-type(4) {
      font-size: 16px;
      font-weight: 500;

      color: #00dea3;
    }
  }

  & > div:nth-of-type(4) {
    & > div:nth-of-type(1) {
      background-color: #fe8f66;
    }

    & > div:nth-of-type(4) {
      font-size: 16px;
      font-weight: 500;

      color: #00dea3;
    }
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
    justify-content: space-between;

    & > div:nth-of-type(1) {
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
      margin-right: 52px;
      font-size: 12px;
      opacity: 0.7;
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
