import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import * as U from '../../../utils';
import wood from '../../../assets/images/wood.png';
import { MEDIA } from '../../../constants';

type Props = {
  products: [I.Product[], number][];
};

const { minWidth } = MEDIA;

export default function SearchContent({ products }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop products={products} /> : <Mobile />;
}

function Desktop({ products }: Props) {
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
      {products &&
        ['컬렉션', '이모티콘', '랜드소품'].map((item, index) => (
          <S.ContentContainer key={index}>
            <S.ContentContainerHeader>
              <div>{item}</div>
              <div>({products[index][1]})</div>
            </S.ContentContainerHeader>
            <S.CardContainer>
              {products[index][0].map((item, index) => (
                <S.ExtraAsset
                  key={index}
                  onClick={moveToPath.bind(
                    null,
                    C.PATH.ITEM_DETAIL.PATH.replace(':id', item.id.toString()),
                  )}>
                  <S.ExtraAssetImg>
                    <img
                      src={item.productImages.filter(e => e.isThumbnail)[0].path}
                      alt={`${item.name}'s represent image`}
                    />
                  </S.ExtraAssetImg>
                  <S.ExtraAssetName>{item.name}</S.ExtraAssetName>
                  <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                  <S.ExtraAssetPrice>
                    <div>
                      <img src={wood} alt='wood' />
                    </div>
                    <div>
                      <div>
                        {Number(item.price).toFixed(2) === '0.00'
                          ? 'FREE'
                          : Number(item.price).toFixed(2) + ' ETH'}
                      </div>
                      <div>{U.convertETHtoUSD(Number(item.price)).toFixed(2) + ' USD'}</div>
                    </div>
                  </S.ExtraAssetPrice>
                </S.ExtraAsset>
              ))}
            </S.CardContainer>
          </S.ContentContainer>
        ))}
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
