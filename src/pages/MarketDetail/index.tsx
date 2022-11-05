import React from 'react';

import * as S from './styled';
import Header from '../../components/organisms/Header';
import MarketDetailContent from '../../components/organisms/MarketDetailContent';

export default function MarketDetail() {
  return (
    <S.Container>
      <Header />
      <MarketDetailContent />
    </S.Container>
  );
}
