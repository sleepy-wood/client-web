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
  margin-top: 48px;
`;

export const ProfileContainer = styled.div``;

export const Name = styled.div``;

export const Description = styled.div``;

export const CollectionInfo = styled.div``;

export const Items = styled.div``;
