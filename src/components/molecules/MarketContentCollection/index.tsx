import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as API from '../../../apis';
import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import * as U from '../../../utils';
import wood from '../../../assets/images/wood.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketContentCollection() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [itemsWithCount, setItemsWithCount] = useState<[I.Product[], number]>(null);

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

  useEffect(() => {
    async function fetchData() {
      const [result, error] = await API.product.findAll({
        page,
        category: I.ProductCategory.collection,
      });

      if (error) {
        console.log(error.data.error.reason);
      }

      setItemsWithCount(result);
    }

    fetchData();
  }, [page]);

  return (
    <S.Container>
      <S.Header>
        <h1>컬렉션 알아보기</h1>
        <p>다양한 컬렉션을 살펴보고 메타버스 속 나만의 특별한 경험을 만들어요.</p>
      </S.Header>
      <S.ContentContainer>
        {itemsWithCount && (
          <React.Fragment>
            <S.ContentContainerHeader>
              <div>컬렉션</div>
              <div>({itemsWithCount[1]})</div>
            </S.ContentContainerHeader>
            <S.CardContainer>
              {itemsWithCount[0].map((item, index) => (
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
          </React.Fragment>
        )}
      </S.ContentContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
