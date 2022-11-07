import React, { useCallback, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import Richtext from '../../molecules/RichtextEditor';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketRegisterContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<any[]>([]);
  const [showImages, setShowImages] = useState<boolean>(false);

  const onChangeFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList.length > 0) {
      setImages([]);
      for (const file of fileList) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          setImages(prev => [...prev, e.target.result]);
        };
        reader.readAsDataURL(file);
      }

      setShowImages(true);
    } else {
      setImages(null);
      setShowImages(false);
    }
  }, []);

  const register = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (confirm('에셋을 판매 등록하시겠습니까?')) {
      console.log('hi');
    }
  }, []);

  return (
    <S.Container>
      <S.Title>내 에셋 판매</S.Title>
      <S.FileUploadForm onSubmit={register}>
        <S.InputContainer>
          <S.Label>라벨 1</S.Label>
          <S.Input type='text' />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>라벨 1</S.Label>
          <S.Input type='text' />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>라벨 1</S.Label>
          <S.Input type='text' />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>라벨 1</S.Label>
          <S.Input type='text' />
        </S.InputContainer>
        <S.RichtextContainer>
          <Richtext />
        </S.RichtextContainer>
        <S.FileUploadContainer>
          <S.FileLabel htmlFor='register-file'>이미지 업로드</S.FileLabel>
          <S.FileInput
            id='register-file'
            type='file'
            multiple
            ref={fileRef}
            onChange={onChangeFileUpload}
          />
          {showImages && (
            <S.ImageContainer>
              {images?.map((image, index) => (
                <S.Image key={index} src={image} />
              ))}
            </S.ImageContainer>
          )}
        </S.FileUploadContainer>
        <S.ButtonContainer>
          <S.SubmitButton type='submit'>등록</S.SubmitButton>
        </S.ButtonContainer>
      </S.FileUploadForm>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
