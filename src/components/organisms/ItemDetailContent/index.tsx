import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as S from './styled';
import tree1 from '../../../assets/images/tree1.png';
import tree2 from '../../../assets/images/tree2.png';
import wood from '../../../assets/images/wood.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function ExtraAssetDetailContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const location = useLocation();
  const navigate = useNavigate();

  const moveToPath = useCallback(
    (path: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (location.pathname !== path) {
        navigate(path);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <S.Container>
      <S.AssetContainer>
        <S.AssetImg>
          <img src={tree1} alt='tree' />
        </S.AssetImg>
        <S.AssetInfo>
          <S.AssetName>나무이름</S.AssetName>
          <S.AssetSeller>
            <div>프로필</div>
            <div>
              <div>크리에이터</div>
              <div>User Nickname</div>
            </div>
            <div>
              <div>지갑 주소</div>
              <div>0x1A3f94C45e28c1882D8672a98e87065223a2c380</div>
            </div>
          </S.AssetSeller>
          <div>
            <S.AssetPrice>
              <div>
                <img src={wood} alt='wood' />
              </div>
              <div>
                <div>3150.00</div>
                <div>2923.03 USD</div>
              </div>
            </S.AssetPrice>
            <S.AssetButtonContainer>
              <div>장바구니 담기</div>
              <div>위시리스트 추가</div>
            </S.AssetButtonContainer>
            <S.AssetDescription>나무에대 한 설명을 막 쓰면 됨</S.AssetDescription>
            <S.ExtraAssets>
              <div>이 크리에이터의 NFT 더 알아보기</div>
              {[1, 2].map((_, index) => (
                <React.Fragment>
                  <S.ExtraAsset key={index + 1} onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL)}>
                    <S.ExtraAssetImg>
                      <img src={tree1} alt='tree' />
                    </S.ExtraAssetImg>
                    <S.ExtraAssetName>나무 이름</S.ExtraAssetName>
                    <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                    <S.ExtraAssetPrice>
                      <div>
                        <img src={wood} alt='wood' />
                      </div>
                      <div>
                        <div>3150.00</div>
                        <div>2923.03 USD</div>
                      </div>
                    </S.ExtraAssetPrice>
                  </S.ExtraAsset>
                  <S.ExtraAsset key={index + 2}>
                    <S.ExtraAssetImg>
                      <img src={tree2} alt='tree' />
                    </S.ExtraAssetImg>
                    <S.ExtraAssetName>나무 이름</S.ExtraAssetName>
                    <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                    <S.ExtraAssetPrice>
                      <div>
                        <img src={wood} alt='wood' />
                      </div>
                      <div>
                        <div>3150.00</div>
                        <div>2923.03 USD</div>
                      </div>
                    </S.ExtraAssetPrice>
                  </S.ExtraAsset>
                </React.Fragment>
              ))}
            </S.ExtraAssets>
            <S.ExtraAssets>
              <div>추천 상품</div>
              {[1, 2].map((_, index) => (
                <React.Fragment>
                  <S.ExtraAsset key={index + 1} onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL)}>
                    <S.ExtraAssetImg>
                      <img src={tree1} alt='tree' />
                    </S.ExtraAssetImg>
                    <S.ExtraAssetName>나무 이름</S.ExtraAssetName>
                    <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                    <S.ExtraAssetPrice>
                      <div>
                        <img src={wood} alt='wood' />
                      </div>
                      <div>
                        <div>3150.00</div>
                        <div>2923.03 USD</div>
                      </div>
                    </S.ExtraAssetPrice>
                  </S.ExtraAsset>
                  <S.ExtraAsset key={index + 2}>
                    <S.ExtraAssetImg>
                      <img src={tree2} alt='tree' />
                    </S.ExtraAssetImg>
                    <S.ExtraAssetName>나무 이름</S.ExtraAssetName>
                    <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                    <S.ExtraAssetPrice>
                      <div>
                        <img src={wood} alt='wood' />
                      </div>
                      <div>
                        <div>3150.00</div>
                        <div>2923.03 USD</div>
                      </div>
                    </S.ExtraAssetPrice>
                  </S.ExtraAsset>
                </React.Fragment>
              ))}
            </S.ExtraAssets>
          </div>
        </S.AssetInfo>
      </S.AssetContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
