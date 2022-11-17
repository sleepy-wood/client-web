import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketHistoryContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.MonthLine>
        <h4>2022.11</h4>
      </S.MonthLine>
      <S.ItemContainer>
        <S.Item>
          <div>이미지</div>
          <div>
            <div>상품이름</div>
            <div>
              <div>0.3ETH</div>
              <div>2022.11.13</div>
            </div>
            <div>결제완료</div>
          </div>
          <div>판매자</div>
        </S.Item>
      </S.ItemContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
