import React from 'react';

import * as S from './styled';
import Header from '../../components/organisms/Header';
import LeftNavigation from '../../components/organisms/LeftNavigation';
import MarketContent from '../../components/organisms/MarketContent';

export default function Market() {
  return (
    <S.Container>
      <div className='flex'>
        <LeftNavigation />
        <MarketContent />
      </div>
    </S.Container>
  );
}
