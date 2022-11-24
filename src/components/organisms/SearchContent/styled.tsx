import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContentContainer = styled.div`
  margin-bottom: 36px;

  padding: 0 98px;
`;

export const ContentContainerHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  & > div:nth-of-type(1) {
    margin-right: 12px;
    font-size: 20px;
    font-weight: 500;
  }

  & > div:nth-of-type(2) {
    font-size: 16px;
    color: #35477dc4;
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

export const ExtraAssets = styled.div`
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
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: rgba(210, 210, 210, 0.6);
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
