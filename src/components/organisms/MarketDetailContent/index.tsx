import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import * as U from '../../../utils';

import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

type Props = {
  user: I.User;
  products: I.Product[];
  productCount: number;
};

export default function MarketDetailContent({ user, products, productCount }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? (
    <Desktop user={user} products={products} productCount={productCount} />
  ) : (
    <Mobile />
  );
}

function Desktop({ user, products, productCount }: Props) {
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
      {user && (
        <React.Fragment>
          <S.Banner>
            <img src={user.bannerImg} alt='Banner' />
          </S.Banner>
          <div style={{ width: '100%', height: '300px' }}></div>
          <S.Content>
            <S.Info>
              <S.ProfileImg>
                <img src={user.profileImg} alt='profile' />
              </S.ProfileImg>
              <S.Profile>
                <S.ProfileContainer>
                  <S.Name>{user.nickname}</S.Name>
                  <S.Description>안녕하세요. 메타버스 플랫폼 슬리피우드입니다.</S.Description>
                </S.ProfileContainer>
                <S.CollectionInfo>
                  <div>컬렉션 정보</div>
                  <div>
                    <div>에셋</div>
                    <div>{productCount}</div>
                  </div>
                </S.CollectionInfo>
              </S.Profile>
            </S.Info>
            <S.ExtraAssets>
              {products.map((item, index) => (
                <S.ExtraAsset
                  key={index}
                  onClick={moveToPath.bind(
                    null,
                    C.PATH.ITEM_DETAIL.PATH.replace(':id', item.id.toString()),
                  )}>
                  <S.ExtraAssetImg>
                    <img
                      src={item.productImages.filter(e => e.isThumbnail)[0].path}
                      style={{
                        objectFit:
                          item.category === I.ProductCategory.collection ? 'cover' : 'contain',
                        objectPosition:
                          item.category === I.ProductCategory.collection ? '0 -68px' : 'unset',
                        borderRadius: item.category === I.ProductCategory.collection ? '10px' : '0',
                      }}
                      alt={`${item.name}'s represent image`}
                    />
                  </S.ExtraAssetImg>
                  <S.ExtraAssetName>{item.name}</S.ExtraAssetName>
                  <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                  <S.ExtraAssetPrice>
                    <div>
                      <div>
                        {Number(item.price).toFixed(3) === '0.000'
                          ? 'FREE'
                          : Number(item.price).toFixed(3) + ' ETH'}
                      </div>
                      <div>{U.convertETHtoUSD(Number(item.price)).toFixed(2) + ' USD'}</div>
                    </div>
                  </S.ExtraAssetPrice>
                </S.ExtraAsset>
              ))}
            </S.ExtraAssets>
          </S.Content>
        </React.Fragment>
      )}
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
