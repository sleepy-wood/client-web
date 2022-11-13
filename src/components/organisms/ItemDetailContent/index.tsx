import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import tree1 from '../../../assets/images/tree1.png';
import tree2 from '../../../assets/images/tree2.png';
import wood from '../../../assets/images/wood.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

type Props = {
  product: I.Product;
  extraProducts: I.Product[];
  recommendProducts: I.Product[];
};

export default function ItemDetailContent({ product, extraProducts, recommendProducts }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? (
    <Desktop
      product={product}
      extraProducts={extraProducts}
      recommendProducts={recommendProducts}
    />
  ) : (
    <Mobile />
  );
}

function Desktop({ product, extraProducts, recommendProducts }: Props) {
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
      {product && (
        <S.AssetContainer>
          <S.AssetImg>
            <img src={product.productImages[product.productImages.length - 1].path} alt='tree' />
          </S.AssetImg>
          <S.AssetInfo>
            <S.AssetName>{product.name}</S.AssetName>
            <S.AssetSeller>
              <div>
                <img src={product.user.profileImg} alt='profile' />
              </div>
              <div>
                <div>크리에이터</div>
                <div>{product.user.nickname}</div>
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
                  <div>
                    {Number(product.price).toFixed(2) === '0.00'
                      ? 'FREE'
                      : Number(product.price).toFixed(2) + ' ETH'}
                  </div>
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
              <S.AssetDescription dangerouslySetInnerHTML={{ __html: product.detail }} />
              <S.SemiTitle>이 크리에이터의 에셋 더 알아보기</S.SemiTitle>
              <S.ExtraAssets>
                {extraProducts &&
                  extraProducts.map((extraProduct, index) => (
                    <S.ExtraAsset
                      key={index}
                      onClick={moveToPath.bind(
                        null,
                        C.PATH.ITEM_DETAIL.PATH.replace(':id', extraProduct.id.toString()),
                      )}>
                      <S.ExtraAssetImg>
                        <img
                          src={
                            extraProduct.productImages[extraProduct.productImages.length - 1].path
                          }
                          alt='tree'
                        />
                      </S.ExtraAssetImg>
                      <S.ExtraAssetName>{extraProduct.name}</S.ExtraAssetName>
                      <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                      <S.ExtraAssetPrice>
                        <div>
                          <img src={wood} alt='wood' />
                        </div>
                        <div>
                          <div>
                            {Number(extraProduct.price).toFixed(2) === '0.00'
                              ? 'FREE'
                              : Number(extraProduct.price).toFixed(2) + ' ETH'}
                          </div>
                          <div>2923.03 USD</div>
                        </div>
                      </S.ExtraAssetPrice>
                    </S.ExtraAsset>
                  ))}
              </S.ExtraAssets>
              <S.SemiTitle>추천 상품</S.SemiTitle>
              <S.ExtraAssets>
                {recommendProducts &&
                  recommendProducts.map((recommendProduct, index) => (
                    <S.ExtraAsset
                      key={index}
                      onClick={moveToPath.bind(
                        null,
                        C.PATH.ITEM_DETAIL.PATH.replace(':id', recommendProduct.id.toString()),
                      )}>
                      <S.ExtraAssetImg>
                        <img
                          src={
                            recommendProduct.productImages[
                              recommendProduct.productImages.length - 1
                            ].path
                          }
                          alt='tree'
                        />
                      </S.ExtraAssetImg>
                      <S.ExtraAssetName>{recommendProduct.name}</S.ExtraAssetName>
                      <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                      <S.ExtraAssetPrice>
                        <div>
                          <img src={wood} alt='wood' />
                        </div>
                        <div>
                          <div>
                            {Number(recommendProduct.price).toFixed(2) === '0.00'
                              ? 'FREE'
                              : Number(recommendProduct.price).toFixed(2) + ' ETH'}
                          </div>
                          <div>2923.03 USD</div>
                        </div>
                      </S.ExtraAssetPrice>
                    </S.ExtraAsset>
                  ))}
              </S.ExtraAssets>
            </div>
          </S.AssetInfo>
        </S.AssetContainer>
      )}
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
