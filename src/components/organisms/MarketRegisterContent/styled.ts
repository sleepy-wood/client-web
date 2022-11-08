import styled from 'styled-components';

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

export const FileLabel = styled.label`
  display: inline-block;
  width: 130px;
  height: 40px;
  vertical-align: middle;

  text-align: center;

  color: var(--color-text);
  background-color: #fdfdfd;
  border: 1px solid #ebebeb;
  border-radius: 5px;

  cursor: pointer;

  padding: 6px 10px;

  margin-right: 8px;
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
  width: 100%;

  display: flex;
`;

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
