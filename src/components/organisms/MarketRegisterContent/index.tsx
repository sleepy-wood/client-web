import React, { useCallback, useState } from 'react';
import FormData from 'form-data';
import Web3 from 'web3';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import * as ABI from '../../../abis';
import * as API from '../../../apis';
import * as C from '../../../constants';
import * as H from '../../../hooks';
import * as I from '../../../interfaces';
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

  const [myCollection, setMyCollection] = useState<I.Tree[]>([]);
  const [collection, setCollection] = useState<I.Tree>(null);
  const [showCollection, setShowCollection] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const onClickCollection = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    setShowModal(true);
    const [tree, treeError] = await API.tree.findAllNotNFTCollection();

    if (treeError) {
      console.log(treeError.data.error.reason);
    }

    setMyCollection(tree);
  }, []);

  const handleCollection = useCallback((tree: I.Tree, e: React.MouseEvent<HTMLDivElement>) => {
    setCollection(tree);
    setShowCollection(true);
    setShowModal(false);
  }, []);

  const register = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const detail = description.map(n => U.serialize(n)).join('\n');

      if (!confirm('에셋을 판매 등록하시겠습니까?')) {
        return false;
      }

      setIsLoading(true);

      const web3 = new Web3(window.ethereum);
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const contract = new web3.eth.Contract(ABI.erc721Abi as any);
      const resultContract = await contract
        .deploy({
          data: ABI.erc721Bytecode,
        })
        .send({
          from: account,
          gas: 1500000,
          gasPrice: '20000000000',
        });

      if (type !== 'collection') {
        const [res, err] = await API.attachFile.upload(formData);

        if (err) {
          console.error(err);
          alert('잠시 후 다시 시도해주세요.');
          setIsLoading(false);
          return;
        }

        const attachFileIds = res.map((d: { id: number }) => d.id);

        const [res2, err2] = await API.product.create({
          name: title,
          price: Number(price),
          category: type,
          detail,
          attachFileIds,
        });

        if (err2) {
          console.error(err2);
          alert('잠시 후 다시 시도해주세요.');
          setIsLoading(false);
          return;
        }

        const resultContractAddress = resultContract.options.address;
        const resultContractAbi = resultContract.options.jsonInterface;
        const tokenId = await resultContract.methods
          .publishItem(account, res2.productImages.filter(e => e.isThumbnail)[0].path)
          .call();

        const [res3, err3] = await API.product.createSmartContract({
          productId: res2.id,
          address: resultContractAddress,
          abi: resultContractAbi,
          tokenId: Number(tokenId),
        });

        if (err3) {
          console.error(err3);
          alert('잠시 후 다시 시도해주세요.');
          setIsLoading(false);
          return;
        }
      } else {
        const resultContractAddress = resultContract.options.address;
        const resultContractAbi = resultContract.options.jsonInterface;
        const tokenId = await resultContract.methods.publishItem(account, '/resources/').call();
      }

      alert('에셋을 판매 등록하였습니다.');
      navigate(C.PATH.HOME);
    },
    [description, formData, title, price, type, navigate],
  );

  return (
    <React.Fragment>
      {showModal && (
        <S.Modal
          onClick={() => {
            setShowModal(false);
          }}>
          <S.ModalBackground
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}>
            <S.CollectionContainer>
              <S.CollectionTitle>내 컬렉션</S.CollectionTitle>
              <S.ExtraAssets>
                {myCollection.map((item, index) => (
                  <S.ExtraAsset key={index} onClick={handleCollection.bind(null, item)}>
                    <S.ExtraAssetImg>
                      <img
                        src={item.treeAttachments.filter(e => e.isThumbnail)[0]?.path}
                        alt={`${item.treeName}'s represent image`}
                      />
                    </S.ExtraAssetImg>
                    <S.ExtraAssetName>{item.treeName}</S.ExtraAssetName>
                  </S.ExtraAsset>
                ))}
              </S.ExtraAssets>
            </S.CollectionContainer>
          </S.ModalBackground>
        </S.Modal>
      )}
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
          ) : type === 'collection' ? (
            <S.FileUploadContainer>
              <S.CollectionLabel onClick={onClickCollection}>컬렉션 업로드</S.CollectionLabel>
              {showCollection && (
                <S.ImageContainer>
                  {collection && (
                    <S.Image
                      src={collection.treeAttachments.filter(e => e.isThumbnail)[0]?.path}
                      alt='collection'
                    />
                  )}
                </S.ImageContainer>
              )}
            </S.FileUploadContainer>
          ) : (
            <React.Fragment>
              <S.FileUploadContainer>
                <S.FileLabel htmlFor='register-thumbnail'>썸네일 업로드</S.FileLabel>
                <S.FileInput
                  id='register-thumbnail'
                  type='file'
                  onChange={onChangeThumbnailUpload}
                />
                {showThumbnail && (
                  <S.ImageContainer>
                    {thumbnail && <S.Image src={thumbnail} alt='thumbnail' />}
                  </S.ImageContainer>
                )}
              </S.FileUploadContainer>
              <S.FileUploadContainer>
                <S.FileLabel htmlFor='register-file'>파일 업로드</S.FileLabel>
                <S.FileInput
                  id='register-file'
                  type='file'
                  multiple
                  onChange={onChangeFileUpload}
                />
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
    </React.Fragment>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
