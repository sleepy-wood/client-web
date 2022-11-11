import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketContentPlants() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.Header>
        <h1>식물 알아보기</h1>
        <p>다양한 식물을 살펴보고 메타버스 속 나만의 특별한 경험을 만들어요.</p>
      </S.Header>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
