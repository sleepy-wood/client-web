import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function Trending() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title active={true}>Trending</S.Title>
        <S.Title>Top</S.Title>
      </S.TitleContainer>
      <S.TopTenContainer>
        <S.FiveContainer>
          <S.SubTitleContainer>
            <div>CREATOR</div>
            <div>최저가</div>
            <div>에셋 수</div>
          </S.SubTitleContainer>
        </S.FiveContainer>
        <S.FiveContainer>Five</S.FiveContainer>
      </S.TopTenContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
