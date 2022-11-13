import React, { useCallback, useRef, useState } from 'react';
import FormData from 'form-data';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as H from '../../../hooks';
import * as S from './styled';
import * as U from '../../../utils';
import Richtext, { CustomElement } from '../../molecules/RichtextEditor';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketRegisterContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [formData] = useState<FormData>(new FormData());
  const [images, setImages] = useState<any[]>([]);
  const [showImages, setShowImages] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [title, onChangeTitle] = H.useInput('');
  const [price, onChangePrice] = H.useInput(1000);

  const [type, setType] = useState<string>('emoticon');
  const [description, setDescription] = useState<CustomElement[]>([
    { type: 'paragraph', children: [{ text: '' }] },
  ]);

  const onChangeFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files;

      if (fileList && fileList.length > 0) {
        setImages([]);
        for (const file of fileList) {
          formData.append('files', file);
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
    },
    [formData],
  );

  const register = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const detail = description.map(n => U.serialize(n)).join('\n');

      if (!confirm('에셋을 판매 등록하시겠습니까?')) {
        return false;
      }

      setIsLoading(true);

      if (!images || images.length === 0) {
        alert('판매할 에셋을 등록해주세요.');
        setIsLoading(false);
        return;
      }

      const { method: m1, url: u1 } = C.APIs.v1.attachFile.create;
      const { result: r1, data: d1 } = await U.callRequest({
        method: m1,
        url: u1,
        data: formData,
      }).catch(err => {
        console.error(err);
        alert('잠시 후 다시 시도해주세요.');
        setIsLoading(false);
        return;
      });

      if (!r1) {
        alert('잠시 후 다시 시도해주세요.');
        setIsLoading(false);
        return;
      }

      const attachFileIds = d1.map((d: { id: number }) => d.id);

      const { method: m2, url: u2 } = C.APIs.v1.product.create;
      const { result: r2, data: d2 } = await U.callRequest({
        method: m2,
        url: u2,
        data: {
          name: title,
          price,
          category: type,
          detail,
          attachFileIds,
        },
      }).catch(err => {
        console.error(err);
        alert('잠시 후 다시 시도해주세요.');
        setIsLoading(false);
        return;
      });

      if (!r2) {
        alert('잠시 후 다시 시도해주세요.');
        setIsLoading(false);
        return;
      }

      alert('에셋을 판매 등록하였습니다.');
      navigate(C.PATH.HOME);
    },
    [images, formData, title, price, type, description, navigate],
  );

  return (
    <S.Container>
      <S.Title>내 에셋 판매</S.Title>
      <S.FileUploadForm onSubmit={register}>
        <S.InputContainer>
          <S.Label>제목</S.Label>
          <S.Input
            required
            value={title}
            onChange={onChangeTitle}
            disabled={isLoading}
            type='text'
            placeholder='제목을 입력해주세요'
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>가격</S.Label>
          <S.Input
            required
            value={price}
            onChange={onChangePrice}
            type='number'
            disabled={isLoading}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>판매 유형</S.Label>
          <S.Select
            defaultValue={type}
            disabled={isLoading}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setType(e.target.value);
            }}>
            <S.Option value='collection'>컬렉션</S.Option>
            <S.Option value='emoticon'>이모티콘</S.Option>
            <S.Option value='flower'>꽃</S.Option>
            <S.Option value='plants'>식물</S.Option>
            <S.Option value='mushroom'>버섯</S.Option>
            <S.Option value='rock'>바위</S.Option>
            <S.Option value='wooden'>목재 소품</S.Option>
            <S.Option value='light'>라이트</S.Option>
          </S.Select>
        </S.InputContainer>
        <S.RichtextContainer>
          <Richtext value={description} setValue={setDescription} readonly={isLoading} />
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
          <S.SubmitButton disabled={isLoading} type='submit'>
            등록
          </S.SubmitButton>
        </S.ButtonContainer>
      </S.FileUploadForm>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
