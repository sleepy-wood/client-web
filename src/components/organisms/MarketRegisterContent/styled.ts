import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10000;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00000070;
`;

export const ModalBackground = styled.div`
  width: 1200px;
  height: 488px;
  background-color: #fff;

  overflow: hidden;

  border-radius: 20px;

  padding: 32px;
`;

export const CollectionContainer = styled.div``;

export const CollectionTitle = styled.div`
  font-weight: 700;
  font-size: 24px;

  margin-bottom: 16px;
`;

export const ExtraAssets = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  grid-gap: 32px 32px;
  justify-content: start;
`;

export const ExtraAsset = styled.div`
  width: 260px;
  height: 360px;

  cursor: pointer;

  overflow: hidden;

  background: #ffffff;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: rgba(210, 210, 210, 0.6);
  border-radius: 15px;
`;

export const ExtraAssetImg = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 4px;
  & > img {
    height: 312px;
    width: calc(100%);
    object-fit: cover;
    filter: brightness(1.1);
  }
`;

export const ExtraAssetName = styled.div`
  width: 90%;

  margin-top: 6px;
  margin-left: 16px;

  font-weight: 600;
  font-size: 16px;
  color: #535353;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 2px 8px 16px 3px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const InputContainer = styled.div`
  width: 100%;

  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;

  padding: 8px 12px;

  border-radius: 10px;
`;

export const Select = styled.select`
  width: 100%;

  padding: 8px 12px;

  border-radius: 10px;
`;

export const Option = styled.option`
  min-width: 100%;
`;

export const RichtextContainer = styled.div`
  background-color: white;
  border-radius: 5px;

  padding: 16px;

  height: 550px;
`;

export const FileUploadContainer = styled.div`
  width: 100%;
  height: 100px;

  margin-top: 16px;

  display: flex;
`;

export const FileUploadForm = styled.form``;

export const CollectionLabel = styled.div`
  display: inline-block;
  width: 140px;
  height: 40px;
  vertical-align: middle;

  text-align: center;

  color: var(--color-text);
  background-color: #fdfdfd;
  border: 1px solid #ebebeb;
  border-radius: 5px;

  cursor: pointer;

  padding: 6px 10px;

  margin-right: 14px;
`;

export const FileLabel = styled.label`
  display: inline-block;
  width: 140px;
  height: 40px;
  vertical-align: middle;

  text-align: center;

  color: var(--color-text);
  background-color: #fdfdfd;
  border: 1px solid #ebebeb;
  border-radius: 5px;

  cursor: pointer;

  padding: 6px 10px;

  margin-right: 14px;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  display: flex;
`;

export const FilenameContainer = styled.div``;

export const Image = styled.img`
  height: 100px;

  margin-right: 8px;

  object-fit: contain;

  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;

  width: 100%;
  height: 48px;

  font-size: 16px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 100%;
`;
