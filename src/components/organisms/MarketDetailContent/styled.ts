import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-bottom: 32px;
`;

export const Banner = styled.div`
  position: absolute;
  top: 72px;
  left: 0;
  width: 100%;
  height: 300px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 0 32px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 30px;

  position: relative;
`;

export const ProfileImg = styled.div`
  width: 180px;
  height: 180px;

  position: absolute;
  top: -148px;

  background: none;
  border: 6px solid white;
  border-radius: 16px;

  overflow: hidden;
  & > img {
    width: 168px;
    height: 168px;

    border-radius: 10px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
`;

export const ProfileContainer = styled.div``;

export const Name = styled.div`
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 0px;
  color: rgb(4, 17, 29);
`;

export const Description = styled.div`
  margin-top: 16px;
`;

export const CollectionInfo = styled.div`
  color: var(--color-text);

  width: 350px;
  height: 98px;

  padding: 18px 18px 0;
  background-color: var(--color-palette9);

  border: 2px solid var(--color-palette10);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & > div:nth-of-type(1) {
    width: 100%;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 600;
  }

  & > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > div {
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;

export const ExtraAssets = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 24px 24px;
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
