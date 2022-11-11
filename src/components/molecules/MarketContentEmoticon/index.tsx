import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketContentEmoticon() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.Header>
        <h1>이모티콘 알아보기</h1>
        <p>다양한 이모티콘을 살펴보고 메타버스 속 나만의 특별한 감정을 표현해요.</p>
      </S.Header>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
