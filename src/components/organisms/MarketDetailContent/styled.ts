import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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
  background-color: #f6728084;

  border: 2px solid #c06c84;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

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

    & > div:nth-of-type(1) {
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;

export const Items = styled.div``;
