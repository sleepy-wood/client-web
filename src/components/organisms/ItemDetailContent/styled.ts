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
`;

export const AssetName = styled.div``;

export const AssetSeller = styled.div``;

export const AssetPrice = styled.div``;

export const AssetButtonContainer = styled.div``;

export const AssetDescription = styled.div``;

export const ExtraAssets = styled.div`
  min-height: calc(100vh - 500px);
  margin-top: 24px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  justify-content: center;
  grid-gap: 20px 0;
`;

export const ExtraAsset = styled.div`
  width: 204px;
  height: 270px;

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
    height: 160px;
    width: 164px;
    object-fit: contain;
    filter: brightness(1.2);
  }
`;

export const ExtraAssetName = styled.div`
  width: 100%;

  margin-left: 16px;

  font-size: 18px;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExtraAssetCount = styled.div`
  margin-left: 16px;

  font-size: 14px;
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
      font-size: 18px;
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
