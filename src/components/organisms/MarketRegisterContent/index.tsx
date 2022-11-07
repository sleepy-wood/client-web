import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import Richtext from '../../molecules/RichtextEditor';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketRegisterContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.Title>내 에셋 등록</S.Title>
      <S.RichtextContainer>
        <Richtext />
      </S.RichtextContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
