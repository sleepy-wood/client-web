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
  height: 640px;

  background-color: var(--color-palette9);

  border: 2px solid var(--color-palette10);
  border-radius: 16px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(1.2);
  }

  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(1.2);
  }
`;

export const AssetInfo = styled.div`
  width: calc(100% - 400px);

  padding-left: 48px;
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
  margin-top: 32px;

  background-color: var(--color-palette9);

  border: 2px solid var(--color-palette10);
  border-radius: 16px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
  margin-top: 32px;
  margin-left: 16px;

  opacity: 0.6;
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
  margin-top: 32px;

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

    background-color: var(--color-palette9);

    border: 2px solid var(--color-palette10);
    border-radius: 12px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  & > div:not(:first-child) {
    width: 60px;
    height: 52px;

    margin-left: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: var(--color-palette9);

    border: 2px solid var(--color-palette10);
    border-radius: 50%;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;

  padding: 0 96px;
`;

export const AssetDescription = styled.div`
  margin-top: 48px;
  /* margin-bottom: 48px; */

  height: 206px;

  padding: 20px 24px;

  background-color: var(--color-palette9);

  border: 2px solid var(--color-palette10);
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const SemiTitle = styled.div`
  margin-top: 24px;

  font-size: 15px;
  color: rgb(4, 17, 29);
  opacity: 0.8;
`;

export const ExtraAssets = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 24px 24px;
  justify-content: start;
`;

export const ExtraAsset = styled.div`
  width: 200px;
  height: 260px;

  border: 2px solid transparent;
  border-radius: 12px;

  cursor: pointer;

  background-image: linear-gradient(#f5f5f5, #f5f5f5), linear-gradient(180deg, #6189ff, #8252fc);
  background-origin: border-box;
  background-clip: content-box, border-box;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  width: 100%;

  margin-left: 16px;

  font-size: 16px;
  font-weight: 600;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExtraAssetCount = styled.div`
  margin-left: 16px;

  font-size: 12px;
  font-weight: 400;
  color: var(--color-text);
  opacity: 0.6;
`;

export const ExtraAssetPrice = styled.div`
  margin-left: 16px;

  display: flex;

  & > div:nth-of-type(1) {
    margin-top: 3px;
    margin-right: 8px;

    width: 28px;
    height: 28px;
  }

  & > div:nth-of-type(2) {
    & > div:nth-of-type(1) {
      font-size: 16px;
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

export const RecommendAsset = styled.div``;
