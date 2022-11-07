import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 48px;
`;

export const AssetContainer = styled.div`
  width: 100%;

  padding: 0 96px;

  display: flex;
`;

export const AssetImg = styled.div`
  width: 400px;
  height: 520px;

  border: 4px solid transparent;
  border-radius: 10px;

  background-image: linear-gradient(#f3f3f3, #f3f3f3),
    linear-gradient(
      196.75deg,
      rgba(246, 114, 128, 0.6) 0.02%,
      rgba(108, 91, 123, 0.4) 0.03%,
      rgba(246, 114, 128, 0.6) 82.49%,
      rgba(246, 114, 128, 0.6) 82.49%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(1.2);
  }
`;

export const AssetInfo = styled.div`
  width: calc(100% - 400px);

  padding: 0 48px;
`;

export const AssetName = styled.h2`
  width: 100%;
  overflow: hidden;

  font-size: 36px;
  font-weight: 600;

  margin-bottom: 16px;
`;

export const AssetSeller = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 20px 25px;

  border: 2px solid #c06c84;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  & > div:not(:first-child) {
    margin-left: 16px;
  }

  & > div:nth-of-type(1) {
    width: 60px;
    height: 60px;

    overflow: hidden;
    border-radius: 50%;

    & > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  & > div:nth-of-type(2) {
    width: 120px;

    & > div:nth-of-type(1) {
      font-size: 12px;
      color: rgb(4, 17, 29);
      opacity: 0.6;
    }

    & > div:nth-of-type(2) {
      font-size: 14px;

      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  & > div:nth-of-type(3) {
    & > div:nth-of-type(1) {
      font-size: 12px;
      color: rgb(4, 17, 29);
      opacity: 0.6;
    }

    & > div:nth-of-type(2) {
      font-size: 14px;
      color: #00adef;

      cursor: pointer;

      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

export const AssetCurrentPrice = styled.div`
  margin-top: 20px;
  margin-left: 16px;
`;

export const AssetPrice = styled.div`
  margin-left: 16px;

  display: flex;

  & > div:nth-of-type(1) {
    margin-top: 3px;
    margin-right: 8px;

    width: 34px;
    height: 34px;
  }

  & > div:nth-of-type(2) {
    & > div:nth-of-type(1) {
      font-size: 24px;
      font-weight: 600;
      color: #35477d;
    }

    & > div:nth-of-type(2) {
      font-size: 14px;
      font-weight: 400;
      color: var(--color-text);
      opacity: 0.7;
    }
  }
`;

export const AssetButtonContainer = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 52px;

    font-size: 16px;
    font-weight: 600;

    color: var(--color-text);

    cursor: pointer;

    border: 1px solid black;
    border-radius: 12px;

    background: rgba(255, 255, 255, 0.5);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  & > div:not(:first-child) {
    width: 52px;
    height: 52px;

    margin-left: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.5);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

export const AssetDescription = styled.div`
  margin-top: 48px;
`;

export const SemiTitle = styled.div`
  margin-top: 16px;

  font-size: 15px;
  color: rgb(4, 17, 29);
  opacity: 0.6;
`;

export const ExtraAssets = styled.div`
  margin-top: 12px;
  margin-bottom: 16px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  justify-content: space-between;
  grid-gap: 14px 0;
`;

export const ExtraAsset = styled.div`
  width: 150px;
  height: 186px;

  border: 4px solid transparent;
  border-radius: 10px;

  cursor: pointer;

  background-image: linear-gradient(#f3f3f3, #f3f3f3),
    linear-gradient(
      196.75deg,
      rgba(246, 114, 128, 0.6) 0.02%,
      rgba(108, 91, 123, 0.4) 0.03%,
      rgba(246, 114, 128, 0.6) 82.49%,
      rgba(246, 114, 128, 0.6) 82.49%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const ExtraAssetImg = styled.div`
  display: flex;
  justify-content: center;
  & > img {
    height: 90px;
    width: 94px;
    object-fit: contain;
    filter: brightness(1.2);
  }
`;

export const ExtraAssetName = styled.div`
  width: 100%;

  margin-left: 16px;

  font-size: 14px;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExtraAssetCount = styled.div`
  margin-left: 16px;

  font-size: 10px;
  font-weight: 400;
  color: var(--color-text);
  opacity: 0.7;
`;

export const ExtraAssetPrice = styled.div`
  margin-left: 16px;

  display: flex;

  & > div:nth-of-type(1) {
    margin-top: 3px;
    margin-right: 8px;

    width: 24px;
    height: 24px;
  }

  & > div:nth-of-type(2) {
    & > div:nth-of-type(1) {
      font-size: 14px;
      font-weight: 600;
      color: #35477d;
    }

    & > div:nth-of-type(2) {
      font-size: 12px;
      font-weight: 400;
      color: var(--color-text);
      opacity: 0.7;
    }
  }
`;

export const RecommendAsset = styled.div``;
