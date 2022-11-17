import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as S from './styled';
import { MEDIA } from '../../../constants';
import tempImg from '../../../assets/images/cate_plants.webp';

const { minWidth } = MEDIA;

export default function MarketHistoryDetailContent() {
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
      <S.ItemContainer>
        <S.Item>
          <S.ItemImg>
            <img src={tempImg} alt='temp' />
          </S.ItemImg>
          <S.ItemInfoContainer>
            <S.ItemTitle
              onClick={moveToPath.bind(null, C.PATH.MARKET_HISTORY.DETAIL.replace(':id', '1'))}>
              상품이름 외 5건
            </S.ItemTitle>
            <S.ItemInfo>
              <div>
                <div>
                  <div>0.3ETH</div>
                  <div>
                    <div>2022.11.13</div>
                  </div>
                </div>
                <div>결제완료</div>
              </div>
              <S.ItemSeller>
                <div>
                  <img src={tempImg} alt='temp' />
                </div>
                <div>판매자이름</div>
              </S.ItemSeller>
            </S.ItemInfo>
          </S.ItemInfoContainer>
        </S.Item>
        <S.Item>
          <S.ItemImg>
            <img src={tempImg} alt='temp' />
          </S.ItemImg>
          <S.ItemInfoContainer>
            <S.ItemTitle
              onClick={moveToPath.bind(null, C.PATH.MARKET_HISTORY.DETAIL.replace(':id', '1'))}>
              상품이름
            </S.ItemTitle>
            <S.ItemInfo>
              <div>
                <div>
                  <div>0.3ETH</div>
                  <div>
                    <div>2022.11.13</div>
                  </div>
                </div>
                <div>결제완료</div>
              </div>
              <S.ItemSeller>
                <div>
                  <img src={tempImg} alt='temp' />
                </div>
                <div>판매자이름</div>
              </S.ItemSeller>
            </S.ItemInfo>
          </S.ItemInfoContainer>
        </S.Item>
      </S.ItemContainer>
      <S.PaymentContainer>
        <S.PaymentTitle>결제 금액</S.PaymentTitle>
        <S.TotalPrice>
          <div>합계</div>
          <div>2.4ETH</div>
        </S.TotalPrice>
      </S.PaymentContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
