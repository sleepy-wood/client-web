import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  color: var(--color-text);
  margin-bottom: 36px;

  & > h1 {
    margin-bottom: 15px;
    font-size: 36px;
    font-weight: 600;
  }

  & > p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const ContentContainer = styled.div`
  margin-bottom: 36px;
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

export const CardContainer = styled.div`
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
