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
  const [formData, setFormData] = useState<FormData>(new FormData());

  const [emoticon, setEmoticon] = useState<any>(null);
  const [showEmoticon, setShowEmoticon] = useState<boolean>(false);

  const [thumbnail, setThumbnail] = useState<any>(null);
  const [filenames, setFilenames] = useState<string[]>([]);
  const [showThumbnail, setShowThumbnail] = useState<boolean>(false);
  const [showFilenames, setShowFilenames] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [title, onChangeTitle] = H.useInput('');
  const [price, onChangePrice] = H.useInput<number>(12.01);

  const [type, setType] = useState<string>('emoticon');
  const [description, setDescription] = useState<CustomElement[]>([
    { type: 'paragraph', children: [{ text: '' }] },
  ]);

  const onChangeEmoticonUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files;

      if (fileList && fileList.length > 0) {
        setEmoticon(null);
        const file = fileList[0];

        formData.append('files', file);

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          setEmoticon(e.target.result);
        };
        reader.readAsDataURL(file);

        setShowEmoticon(true);
      } else {
        setEmoticon(null);
        setShowEmoticon(false);
      }
    },
    [formData],
  );

  const onChangeThumbnailUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files;

      if (fileList && fileList.length > 0) {
        setThumbnail(null);
        const file = fileList[0];

        formData.append('files', file);

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          setThumbnail(e.target.result);
        };
        reader.readAsDataURL(file);

        setShowThumbnail(true);
      } else {
        setThumbnail(null);
        setShowThumbnail(false);
      }
    },
    [formData],
  );

  const onChangeFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files;

      if (fileList && fileList.length > 0) {
        setFilenames([]);
        for (const file of fileList) {
          formData.append('files', file);
          setFilenames(prev => [...prev, file.name]);
        }

        setShowFilenames(true);
      } else {
        setFilenames([]);
        setShowFilenames(false);
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
          price: Number(price),
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
    [formData, title, price, type, description, navigate],
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
          <S.Label>가격 단위(ETH)</S.Label>
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
              setFormData(new FormData());
              setEmoticon(null);
              setShowFilenames(false);
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
        {type === 'emoticon' ? (
          <S.FileUploadContainer>
            <S.FileLabel htmlFor='register-emoticon'>이모티콘 업로드</S.FileLabel>
            <S.FileInput id='register-emoticon' type='file' onChange={onChangeEmoticonUpload} />
            {showEmoticon && (
              <S.ImageContainer>
                {emoticon && <S.Image src={emoticon} alt='emoticon' />}
              </S.ImageContainer>
            )}
          </S.FileUploadContainer>
        ) : (
          <React.Fragment>
            <S.FileUploadContainer>
              <S.FileLabel htmlFor='register-thumbnail'>썸네일 업로드</S.FileLabel>
              <S.FileInput id='register-thumbnail' type='file' onChange={onChangeThumbnailUpload} />
              {showThumbnail && (
                <S.ImageContainer>
                  {thumbnail && <S.Image src={thumbnail} alt='thumbnail' />}
                </S.ImageContainer>
              )}
            </S.FileUploadContainer>
            <S.FileUploadContainer>
              <S.FileLabel htmlFor='register-file'>파일 업로드</S.FileLabel>
              <S.FileInput id='register-file' type='file' multiple onChange={onChangeFileUpload} />
              {showFilenames && (
                <S.FilenameContainer>
                  {filenames?.map((filename, index) => (
                    <div key={index}>{filename}</div>
                  ))}
                </S.FilenameContainer>
              )}
            </S.FileUploadContainer>
          </React.Fragment>
        )}

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
