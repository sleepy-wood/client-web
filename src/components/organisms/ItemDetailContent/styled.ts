import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-top: 48px;
  padding-bottom: 32px;
`;

export const AssetContainer = styled.div`
  width: 100%;

  padding: 0 96px;

  display: flex;
`;

export const AssetVideo = styled.div`
  width: 400px;
  height: 640px;

  background-color: var(--color-palette9);

  border: 2px solid var(--color-palette10);
  border-radius: 16px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  overflow: hidden;

  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(1.2);
  }
`;

export const AssetImg = styled.div`
  width: 390px;
  height: 390px;

  padding: 0 12px;

  background: rgba(255, 255, 255, 0.9);
  box-shadow: -10px 56px 140px rgba(143, 155, 186, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(1.2);
  }
`;

export const AssetInfo = styled.div`
  width: calc(100% - 390px);

  padding-left: 36px;
`;

export const AssetName = styled.h2`
  width: 100%;
  margin-bottom: 16px;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    & > div {
      font-size: 12px;
      font-weight: 700;
      color: #2d3748;

      padding: 0px 8px;
      background-color: #dce8f4;
      border-radius: 100px;
    }

    & > div:nth-of-type(1) {
      margin-right: 12px;
    }
  }

  & > div:nth-of-type(2) {
    font-weight: 300;
    font-size: 16px;
    color: #535353;

    margin-bottom: 2px;
  }

  & > div:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-weight: 700;
    font-size: 48px;

    margin-top: 10px;
  }
`;

export const AssetSeller = styled.div`
  width: 100%;
  padding: 14px 24px;
  margin-top: 16px;

  background: linear-gradient(112deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 111%);
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(7px);
  border-radius: 10px;

  & > div:first-of-type {
    color: #535353;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 6px;
  }

  & > div:last-of-type {
    display: flex;
    align-items: center;

    & > div:nth-of-type(1) {
      width: 60px;
      height: 60px;

      overflow: hidden;
      border-radius: 12px;

      margin-right: 28px;

      & > img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }

    & > div:nth-of-type(2) {
      & > div:nth-of-type(1) {
        font-weight: 700;
        font-size: 16px;

        color: #535353;
      }

      & > div:nth-of-type(2) {
        display: flex;
        align-items: center;

        & > div:nth-of-type(1) {
          margin-right: 4px;
          font-weight: 500;
          font-size: 13px;

          color: #677281;
        }

        & > div:nth-of-type(2) {
          font-weight: 300;
          font-size: 11px;

          color: #677281;
        }
      }
    }
  }
`;

export const PriceButtonContainer = styled.div`
  background: linear-gradient(112deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 111%);
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(7px);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 32px;
  margin-top: 16px;
`;

export const PriceContainer = styled.div`
  & > div:nth-of-type(1) {
    font-weight: 400;
    font-size: 14px;
    color: #535353;
  }

  & > div:nth-of-type(2) {
    font-weight: 700;
    font-size: 24px;

    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  & > div:nth-of-type(3) {
    font-weight: 400;
    font-size: 12px;
    color: #535353;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 246px;
    height: 56px;

    padding: 0px 8px;

    font-size: 16px;
    font-weight: 600;

    color: var(--color-text);

    cursor: pointer;

    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }

  & > div:not(:first-child) {
    width: 56px;
    height: 56px;

    margin-left: 16px;
    padding: 0px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background: #ffffff;
    box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;

  padding: 0 96px;
`;

export const AssetDescription = styled.div`
  margin-top: 24px;

  min-height: 130px;

  padding: 20px 24px;

  background: linear-gradient(112deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 111%);
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(7px);
  border-radius: 10px;

  & > div:first-of-type {
    display: flex;
    align-items: center;

    font-weight: 400;
    font-size: 16px;
    color: #535353;

    margin-bottom: 16px;

    & > div:nth-of-type(1) {
      margin-right: 12px;
      transform: scaleX(-1) rotate(270deg);
    }
  }
`;

export const BlockContainer = styled.div`
  width: 100%;

  padding: 26px 32px;
  margin-top: 24px;

  background: linear-gradient(112deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 111%);
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(7px);
  border-radius: 10px;
`;

export const SemiTitle = styled.div`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  color: #535353;

  & > div:nth-of-type(1) {
    margin-right: 12px;
  }
`;

export const ExtraAssets = styled.div`
  margin-top: 16px;

  padding-bottom: 16px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 32px 32px;
  justify-content: start;
`;

export const ExtraAsset = styled.div`
  width: 200px;
  height: 260px;

  cursor: pointer;

  background: #ffffff;
  border-width: 0px 1px 2px 0.5px;
  border-style: solid;
  border-color: rgb(173 173 179 / 60%);
  border-radius: 15px;
`;

export const ExtraAssetImg = styled.div`
  display: flex;
  justify-content: center;
  & > img {
    margin: 12px 0;
    height: 132px;
    width: calc(100% - 24px);
    object-fit: contain;
    filter: brightness(1.2);
  }
`;

export const ExtraAssetName = styled.div`
  width: 90%;

  margin-left: 16px;

  font-weight: 600;
  font-size: 16px;
  color: #535353;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExtraAssetCount = styled.div`
  margin-left: 16px;

  font-weight: 400;
  font-size: 10px;
  color: #535353;
`;

export const ExtraAssetPrice = styled.div`
  margin-top: 6px;
  margin-left: 16px;

  display: flex;

  & > div:nth-of-type(1) {
    & > div:nth-of-type(1) {
      font-weight: 700;
      font-size: 18px;

      background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    & > div:nth-of-type(2) {
      font-weight: 400;
      font-size: 11px;
      color: #535353;
    }
  }
`;
