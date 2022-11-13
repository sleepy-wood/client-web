import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

import * as C from '../../../constants';
import * as S from './styled';
import profile from '../../../assets/images/profile1.png';
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
        scrollTo(0, 0);
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
            <div>
              <img src={profile} alt='profile' />
            </div>
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
            <S.AssetCurrentPrice>CURRENT PRICE</S.AssetCurrentPrice>
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
              <div>지금구매</div>
              <div>
                <FaShoppingCart size={24} />
              </div>
              <div>
                <FaHeart size={24} />
              </div>
            </S.AssetButtonContainer>
            <S.AssetDescription>
              선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를
              둔다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한
              서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다. 공무원의 신분과
              정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 법관이 중대한 심신상의 장해로
              직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다.
            </S.AssetDescription>
            <S.SemiTitle>이 크리에이터의 NFT 더 알아보기</S.SemiTitle>
            <S.ExtraAssets>
              {[1, 2].map((_, index) => (
                <React.Fragment>
                  <S.ExtraAsset
                    key={index + 1}
                    onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL.PATH.replace(':id', '1'))}>
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
            <S.SemiTitle>추천 상품</S.SemiTitle>
            <S.ExtraAssets>
              {[1, 2].map((_, index) => (
                <React.Fragment>
                  <S.ExtraAsset
                    key={index + 1}
                    onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL.PATH.replace(':id', '1'))}>
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
